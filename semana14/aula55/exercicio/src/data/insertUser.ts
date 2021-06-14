import { User } from "../model/user";
import { connection } from "./connection";

export const insertUser = async(user: User) => {
    await connection.insert(user).into("User_Arq")
}