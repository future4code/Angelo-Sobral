import { post } from "../../model/post";
import { connection } from "../connection";

export const insertPost = async (post: post) => {
  await connection.insert(post).into("labook_posts");
};
