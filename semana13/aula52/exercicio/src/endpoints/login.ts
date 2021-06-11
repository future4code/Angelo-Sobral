import { Request, Response } from "express";
import connection from "../connection";
import { generateToken } from "../services/authenticator";
import { getUserByEmail } from "../services/getUserByEmail";
import { compareHash } from "../services/hashManager";

const login = async (req: Request, res: Response):Promise<void> => {
    try {
        const { email, password } = req.body
      
        const user = await getUserByEmail(email);

        if(!compareHash(password, user.password)) {
            throw new Error("Senha inválida")
        }

        const token = generateToken({
            id: user.id
        })

        res.status(200).send({token})
    } catch (error) {
        res.status(400).send({message: error.message})
    }
}

export default login
