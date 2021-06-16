import { Request, Response } from "express";
import { getUsers } from "../data/getUsers";
import { getTokenData } from "../services/authenticator";

export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const token = req.headers.authorization;

    const tokenData = getTokenData(token as string);

    if (!tokenData) {
      throw new Error("Não autorizado.");
    }

    const allUsers = await getUsers();

    res.send(allUsers);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
