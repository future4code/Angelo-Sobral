import { Router } from "express"
import { createTask } from "../controller/task/createTask"
import { getTaskById } from "../controller/task/getTaskById"

export const taskRouter = Router()

taskRouter.put("/", createTask)
taskRouter.get("/:id", getTaskById)

// GET http://localhost:3003/tasks/12345676