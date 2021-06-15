import { Request, Response } from "express";
import { deleteBusiness } from "../business/deleteBusiness";

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const token = req.headers.authorization as string;

    await deleteBusiness(id, token);

    res.status(200).send({ message: "Usuário deletado" });
  } catch (error) {
    res.status(400).send(error.message);
  }
};
