import { Request, Response } from "express";
import connection from "../connection";
import { generateToken } from "../services/authenticator";
import generateId from "../services/idGenerator";
import { user, userRole } from "../types";
import { hash } from "../services/hashManager";
import { getSalt } from "bcryptjs";
import getAddress from "../services/getCEP";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, nickname, email, password, cep, number, addressAdd, role } = req.body

      if (!name || !nickname || !email || !password || !role || !cep) {
         res.statusCode = 422
         throw new Error("Preencha os campos 'name','nickname', 'password', 'email', 'cep' e 'role'")
      }

      if(role.toUpperCase() !== userRole.ADMIN && role.toUpperCase() !== userRole.NORMAL){
         res.statusCode = 422
         throw new Error("Os valores possíveis para 'role' são NORMAL e ADMIN")
      }

      const [user] = await connection('to_do_list_users')
         .where({ email })

      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }

      const addressUser = await getAddress(cep)

      const id: string = generateId();

      const cypherText = await hash(password);

      const newUser: user = { id, name, nickname, email, password: cypherText, role }

      await connection('to_do_list_users')
      .insert(newUser)

      await connection('to_do_address_users')
      .insert({
         cep,
         logradouro: addressUser?.street,
         número: number,
         complemento: addressAdd,
         bairro: addressUser?.neighborhood,
         cidade: addressUser?.city,
         estado: addressUser?.state,
         user_id: id
      })

      const token: string = generateToken({ id, role })

      res.status(201).send({ token })

   } catch (error) {

      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.message })
      }
   }
}