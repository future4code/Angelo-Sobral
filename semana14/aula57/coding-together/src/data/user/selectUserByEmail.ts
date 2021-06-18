import { connection } from "../connection"
import { toUserModel, user } from "../../model/user"

export const selectUserByEmail = async (
   email: string
): Promise<user> => {
   try {
      const result = await connection("to_do_list_users")
         .select("*")
         .where({ email })

      return toUserModel(result[0])

   } catch (error) {
      throw new Error(error.slqMessage || error.message)
   }
}