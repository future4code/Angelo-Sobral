import { Request, Response } from "express";
import connection from "../connection";
import { createToken } from "../services/authenticator";
import createID from "../services/createID";

export default async function signUp(
   req: Request,
   res: Response
): Promise<void> {
    try {
        const { email, password } = req.body

        if (!email || email.indexOf('@') === -1) {
            throw new Error('Email inválido')
        }

        if (!password || password.length < 6) {
            throw new Error('Senha inválida')
        }

        const [user] = await connection('User')
        .where({ email })

        if (user) {
          res.statusCode = 409
          throw new Error('Email já cadastrado')
        }

        const id = createID()

        const newUser =  await connection("User")
        .insert({id, email, password})

        const token = createToken({
            id
        })

        res.status(201).send({token, message:"token gerado pelo jwt"})
    } catch (err) {
        res.status(400).send({
            message: err.message,
        });
    }
}