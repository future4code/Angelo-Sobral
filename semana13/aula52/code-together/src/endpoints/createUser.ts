import { Request, Response } from "express";
import connection from "../connection";
import { user, USER_ROLES } from "../types";
import { generateId } from "../services/idGenerator";
import { generateToken } from "../services/authenticator";
import { createHash } from "../services/hashManager";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, nickname, email, password, role } = req.body

      if (!name || !nickname || !email || !password || !role) {
         res.statusCode = 422
         throw new Error("Preencha os campos 'name','nickname', 'password', 'role' e 'email'")
      }

      if (!(role in USER_ROLES)) {
         throw new Error('Role deve ser normal ou admin')
      }
      
      const [user] = await connection('to_do_list_users')
         .where({ email })

      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }

      const id: string = generateId();

      const newUser: user = { id, name, nickname, email, role, password: createHash(password) }

      await connection('to_do_list_users')
         .insert(newUser);

      const token: string = generateToken({
         id: newUser.id,
         role
      });

      res.status(201).send({ newUser, token });

   } catch (error) {
      res.status(400).send({ message: error.message })
   }
}