import { Request, Response } from "express";
import { getPostBusiness } from "../business/post/getPostBusiness";
import { post } from "../model/post";

export const getPost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const token = req.headers.authorization as string;
    const post: post = await getPostBusiness(id, token);

    res.status(200).send({ post });
  } catch (error) {
    res.status(400).send(error.message);
  }
};
