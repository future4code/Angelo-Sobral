import { connection } from "../connection";

export const getPostById = async (id: string) => {
  return await connection("labook_posts").where({ id });
};
