import { selectTaskById } from "../../data/task/selectTaskById"
import { taskInputDTO } from "../../model/task"

export const getTaskByIdBusiness = async (
   id: string
):Promise<taskInputDTO> => {
   const result = await selectTaskById(id)

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