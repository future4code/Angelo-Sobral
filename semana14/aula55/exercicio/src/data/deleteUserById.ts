import { connection } from "./connection";

export const deleteUserById = async (id: string): Promise<void> => {
  try {
      
    await connection.where({id})
    .from("User_Arq").del();

  } catch (error) {
    throw new Error(error.slqMessage || error.message);
  }
};
