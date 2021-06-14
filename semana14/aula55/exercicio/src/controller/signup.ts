import { Request, Response } from "express";
import { signupBusiness } from "../business/signupBusiness";

export const signup = async (
  req: Request, 
  res: Response):Promise<void> => {
  try {
    const { name, email, password, role } = req.body

    const token:string = await signupBusiness({ 
        name, email, password, role
    })

    res.status(201).send({
        token,
        message: "Usuário criado com sucesso!"
    })

  } catch(error) {
      res.status(400).send(error.message)
  }
}