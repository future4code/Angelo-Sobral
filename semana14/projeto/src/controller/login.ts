import { Request, Response } from "express";
import { loginBusiness } from "../business/user/loginBusisness";
import { userLogin } from "../model/user";

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const loginInput: userLogin = { email, password };

    const token: string = await loginBusiness(loginInput);

    res.status(200).send({ message: "Usuário logado com sucesso!", token });
  } catch (error) {
    res.status(400).send(error.message);
  }
};
