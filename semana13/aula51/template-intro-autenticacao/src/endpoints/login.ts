import { Request, Response } from "express";
import connection from "../connection";
import { generateToken } from "../services/autheticator";

export default async function login(
   req: Request,
   res: Response
): Promise<void> {
   try {
     
    const { email, password } = req.body
    if (!email) {
        throw new Error('Please fill email field')
    }

    if (!password) {
        throw new Error('Please fill email password')
    }

    const user = await connection.raw(`
        SELECT * FROM to_do_list_users
        WHERE email = '${email}';
    `)

    if(!user[0][0].id) {
        throw new Error('User not found')
    }

    if (user[0][0].password !== password) {
        throw new Error('Wrong password')
    }

    const token:string = generateToken({
        id: user[0][0].id
    })

    res.status(200).send({token})

   } catch (error) {

      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.message })
      }
   }
}