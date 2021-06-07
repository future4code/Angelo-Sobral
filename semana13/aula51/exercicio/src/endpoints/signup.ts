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

        const id = createID()

        const user =  await connection("User")
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