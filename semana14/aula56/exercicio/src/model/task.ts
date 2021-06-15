export type taskData = {
   title: string,
   description: string,
   deadline: string,
   authorId: string
}

export type task = taskData & { id: string }

export type taskInputDTO = task & { status: any, authorId: any, authorNickname: any}
