import { Request, Response } from "express";
import connection from "../connection";
import { getTokenData } from "../services/authenticator";
import createID from "../services/createID";
import { recipe } from "../types";

const createRecipe = async (req: Request, res: Response): Promise<void> => {
  try {
    const token = req.headers.authorization;
    const authData = getTokenData(token as string);

    if (!authData) {
      throw new Error("Token inálido ou não informado.");
    }

    const { title, description } = req.body;

    if (!title || !description) {
      throw new Error(
        "Os campos 'title' e 'description' devem ser preenchidos."
      );
    }

    const [recipe] = await connection("cookenu_recipes")
    .where("user_id", authData.id).andWhere({title})
    
    if(recipe) {
        throw new Error("Receita já cadastrada.")
    }

    const newRecipe: recipe = {
      id: createID(),
      title,
      description,
      created_at: new Date().toISOString().slice(0, 10),
      user_id: authData.id,
    };

    await connection("cookenu_recipes").insert(newRecipe);

    res.status(201).send({ title, description });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export default createRecipe;
