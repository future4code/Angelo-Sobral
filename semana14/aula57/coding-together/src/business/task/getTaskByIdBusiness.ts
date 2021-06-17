import { TaskDatabase } from "../../data/task/taskDataBase"

export const getTaskByIdBusiness = async (
   id: string
) => {
   const taskDB = new TaskDatabase("to_do_list_tasks")

   const result = await taskDB.getTaskById(id)

   if (!result) {
      throw new Error("Tarefa não encontrada")
   }

   const taskWithUserInfo = {
      id: result.id,
      title: result.title,
      description: result.description,
      deadline: result.deadline,
      status: result.status,
      authorId: result.author_id,
      authorNickname: result.nickname
   }

   return taskWithUserInfo
}