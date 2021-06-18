import { Request, Response } from "express";
import { createPostBusiness } from "../business/post/createPostBusiness";
import { postData } from "../model/post";

export const createPost = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;
    const { photo, description, type } = req.body;

    const inputData: postData = { photo, description, type };

    await createPostBusiness(inputData, token);

    res.status(201).send({ message: "Post criado com sucesso!" });
  } catch (error) {
    res.status(400).send(error.message);
  }
};
