import { Request, Response } from "express";
import connection from "../connection";
import { generateToken } from "../services/authenticator";
import createID from "../services/createID";
import { createHash } from "../services/hashManager";

const signUp = async (req:Request, res:Response):Promise<void> => {
    try {
        const { email, password } = req.body

        const id = createID()

        const newUser = { id, email, password:createHash(password)}

        await connection('User').insert(newUser)

        const token = generateToken({
            id
        })

        res.status(201).send({token, newUser})
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

export default signUp