import { Request, Response } from "express";
import connection from "../connection";
import { getTokenData } from "../services/authenticator";
import { recipe } from "../types";

const getRecipeById = async (req: Request, res: Response):Promise<void> => {
    try {
        const { id } = req.params
        
        const token = req.headers.authorization
        const authData = getTokenData(token as string)

        if (!authData) {
            throw new Error("Token inálido ou não informado.");
        }

        const [recipe] = await connection("cookenu_recipes").where({id})
        
        if (!recipe) {
            throw new Error("Receita não cadastrada ou ID incorreto.")
        }

        res.status(200).send({
            id: recipe.id,
            title: recipe.title,
            description: recipe.description,
            created_at: recipe.created_at.toISOString().slice(0,10).split("-").reverse().join("/")
        })
        
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

export default getRecipeById