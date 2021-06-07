import { Request, Response } from "express";
import connection from "../connection";
import { createToken } from "../services/authenticator";
import { getUserByEmail } from "../services/getUserByEmail";

export default async function login(
   req: Request,
   res: Response
): Promise<void> {
    try {
        const { email, password } = req.body

        if (!email || email.indexOf('@') === -1) {
            throw new Error('Email inválido')
        }

        const user = await getUserByEmail(email)

        if (!user) {
            throw new Error('Email inválido')
        }

        if (password !== user.password) {
            throw new Error('Senha inválida')
        }

        const token = createToken({
            id: user.id
        })

        res.status(200).send({token, message:'Login efetuado com sucesso!'})
    } catch (err) {
        res.status(400).send({
            message: err.message,
        });
    }
}