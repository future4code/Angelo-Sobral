import { Request, Response } from "express"
import connection from "../connection"
import { getTokenData } from "../services/authenticator"

const getUserProfile = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization
    
        const authData = getTokenData(token as string)
    
        const [user] = await connection("cookenu_users").where("id", authData.id)
        
        res.status(200).send({
            id: user.id,
            name: user.name,
            email: user.email
        })

    } catch(error) {
        res.status(500).send({message: error.message})
    }
}

export default getUserProfile