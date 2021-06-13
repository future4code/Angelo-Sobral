import { Request, Response } from "express";
import connection from "../connection";
import { getTokenData } from "../services/authenticator";

const getProfileById = async (req: Request, res: Response):Promise<void> => {
  try {
    const token = req.headers.authorization;
    const authData = getTokenData(token as string);

    if (!authData) {
      throw new Error("Token inálido ou não informado.");
    }

    const { id } = req.params;

    const [user] = await connection("cookenu_users").where({ id });

    if (!user) {
      throw new Error("Usuário não cadastrado ou ID incorreto.");
    }

    res.status(200).send({
      id: user.id,
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export default getProfileById