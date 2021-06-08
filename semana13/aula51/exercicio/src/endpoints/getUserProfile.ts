import { Request, Response } from "express";
import connection from "../connection";
import { getData } from "../services/authenticator";
import { getUserById } from "../services/getUserById";

export default async function getUserProfile(
   req: Request,
   res: Response
): Promise<void> {
    try {
        const token = req.headers.authorization
        console.log(token)
        const authData = getData(token as string)

        const user = await getUserById(authData.id)
        console.log(user.id)
        res.status(200).send({
            id: user.id, 
            email: user.email
        })
    } catch (err) {
        res.status(400).send({
            message: err.message,
        });
    }
}