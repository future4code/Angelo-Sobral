import { connection } from "./connection";

export const getUsers = async (): Promise<void> => {
  try {
      
    return await connection("User_Arq");

  } catch (error) {
    throw new Error(error.slqMessage || error.message);
  }
};
