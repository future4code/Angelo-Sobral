import { Request, Response } from "express";
import { loginBusiness } from "../business/loginBusiness";

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    const token:string = await loginBusiness(email, password);

    res.send({
      token,
      message: "Logado com sucesso!",
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};
