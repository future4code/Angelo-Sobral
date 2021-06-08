import { Request, Response } from "express";
import connection from "../connection";
import { getTokenData } from "../services/autheticator";

export default async function editUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const token = req.headers.authorization as string
      const verifiedToken = getTokenData(token)

      if (!verifiedToken) {
         res.statusCode=(401)
         throw new Error('Unauthorized')
      }

      const { name, nickname } = req.body

      if (!name && !nickname) {
         res.statusCode = 422
         res.statusMessage = "Informe o(s) novo(s) 'name' ou 'nickname'"
         throw new Error()
      }

      await connection('to_do_list_users')
         .update({ name, nickname })
         .where({ id: verifiedToken.id })

      res.end()

   } catch (error) {

      if (res.statusCode === 200) {
         res.status(500).end()
      }

      res.end()
   }
}