import { insertTask } from "../../data/task/insertTask";
import { taskData } from "../../model/task";
import { generateId } from "../../services/idGenerator";
import { TaskDatabase } from "../../data/task/TaskDatabase";

export const createTaskBusiness = async (
   taskData: taskData
) => {

   if (
      !taskData.title ||
      !taskData.description ||
      !taskData.deadline ||
      !taskData.authorId
   ) {
      throw new Error('"title", "description", "deadline" e "authorId" são obrigatórios')
   }

   const id: string = generateId()

   const td = new TaskDatabase("to_do_list_tasks");
   
   await td.createTask({
      id,
      ...taskData
   })
}