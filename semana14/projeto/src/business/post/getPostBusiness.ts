import { getPostById } from "../../data/post/getPostById";
import { post } from "../../model/post";
import { getTokenData } from "../../services/authenticator";
import { convertLocaleDate } from "../../services/createDate";

export const getPostBusiness = async (id: string, token: string) => {
  getTokenData(token);

  const [result] = await getPostById(id);

  if (!result) {
    throw new Error("Id não encontrado!");
  }

  const post:post = {
    ...result,
    created_at: convertLocaleDate(result.created_at)
  };

  return post
};
