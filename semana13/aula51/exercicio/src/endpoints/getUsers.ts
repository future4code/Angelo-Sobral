import { Request, Response } from "express";
import connection from "../connection";

export default async function getUsers(
   req: Request,
   res: Response
): Promise<void> {
   try {

    const users = await connection('to_do_list_users')
    
    res.status(200).send(users)

   } catch (error) {

    res.status(500).send({message: error.message})
   }
}