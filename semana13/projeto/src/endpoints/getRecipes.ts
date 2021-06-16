import { Request, Response } from "express";
import connection from "../connection";
import { getTokenData } from "../services/authenticator";

const getRecipes = async (req: Request, res: Response): Promise<void> => {
  try {
    const token = req.headers.authorization;
    const authData = getTokenData(token as string);

    if (!authData) {
      throw new Error("Token inálido ou não informado.");
    }

    const [result] = await connection.raw(`
      SELECT cookenu_recipes.id, title, description, 
      created_at, user_id, cookenu_users.name 
      FROM cookenu_recipes
      JOIN cookenu_users ON user_id = cookenu_users.id;
    `);

    res.status(200).send({ result });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export default getRecipes
