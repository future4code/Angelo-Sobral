import { User } from "../model/user";
import { connection } from "./connection";

export const getUserByEmail = async (email: string): Promise<User> => {
  try {
    const [result] = await connection("User_Arq").where({ email });

    return result;
  } catch (error) {
    throw new Error(error.slqMessage || error.message);
  }
};
