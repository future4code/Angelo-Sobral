import { Router } from "express";
import { createPost } from "../controller/createPost";
import { getPost } from "../controller/getPost";

export const postRouter = Router()

postRouter.post("/create", createPost)
postRouter.get("/:id", getPost)