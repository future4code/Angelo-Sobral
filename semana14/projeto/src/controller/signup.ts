import { Request, Response } from "express";
import { signupBusiness } from "../business/signupBusiness";
import { userData } from "../model/user";

export const signup = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    const signupInput:userData = { name, email, password };

    const token: string = await signupBusiness(signupInput);

    res.status(201).send({ message: "Usuário criado com sucesso!", token });
  } catch (error) {
    res.status(400).send(error.message);
  }
};
