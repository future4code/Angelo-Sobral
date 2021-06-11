import { Request, Response } from "express"
import connection from "../connection"
import { createToken } from "../services/authenticator"
import { compareHash } from "../services/hashManager"

const login = async (req: Request, res: Response):Promise<void> => {
    try{
        const { email, password } = req.body
    
        if(!email || !password) {
            throw new Error("Email e/ou senha não informados")
        }
    
        const [user] = await connection("cookenu_users").where({email})

        if(!user) {
            throw new Error("Email inválido")
        }
    
        if(!compareHash(password, user.password)) {
            throw new Error("Senha inválida")
        }
    
        const token = createToken({id: user.id})

        res.status(200).send({token})
    } catch(error) {
        res.status(500).send({message: error.message})
    }

}

export default login