import { Request, Response } from "express";
import connection from "../connection";

const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await connection('to_do_list_users')

        res.status(200)
        .send(users)
    } catch (err) {
        res.status(500)
        .send({message: err.message})
    }
}

export default getUsers