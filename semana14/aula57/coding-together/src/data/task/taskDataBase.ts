import { task } from "../../model/task";
import { connection } from "../connection";

export class TaskDatabase {
    tableName: string;

    constructor(tableName: string){
        this.tableName = tableName
    }

    createTask = async (
        task: task
     ) => {
        await connection(this.tableName)
           .insert({
              id: task.id,
              title: task.title,
              description: task.description,
              deadline: task.deadline,
              author_id: task.authorId
           })
     }

     getTaskById = async (
        id: string
     ): Promise<any> => {
        const result: any = await connection.raw(`
             SELECT tasks.*, nickname FROM ${this.tableName} AS tasks
             JOIN to_do_list_users AS users
             ON author_id = users.id
             WHERE tasks.id = '${id}';
         `)
     
        return result[0][0]
     }

}