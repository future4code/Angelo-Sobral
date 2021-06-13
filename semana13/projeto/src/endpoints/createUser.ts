import { Request, Response } from "express";
import connection from "../connection";
import { createToken } from "../services/authenticator";
import createID from "../services/createID";
import { createHash } from "../services/hashManager";
import { user } from "../types";

const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      throw new Error(
        "Todos os campos: name, email e password, devem ser preenchidos."
      );
    }

    if (password.length < 6) {
      throw new Error("A senha deve conter pelo menos 6 caracteres.");
    }

    const [user] = await connection("cookenu_users").where({email})
    
    if(user) {
      throw new Error("Email já cadastrado.")
    }

    const newUser: user = {
      id: createID(),
      name,
      email,
      password: createHash(password),
    };

    await connection("cookenu_users").insert(newUser);

    const token: string = createToken({ id: newUser.id });

    res.status(201).send({ token, newUser });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export default createUser;
