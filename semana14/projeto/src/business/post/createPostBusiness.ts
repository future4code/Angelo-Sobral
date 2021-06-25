import { insertPost } from "../../data/post/insertPost";
import { post, postData, TYPE } from "../../model/post";
import { getTokenData } from "../../services/authenticator";
import { createDate } from "../../services/createDate";
import { idGenerator } from "../../services/idGenerator";

export const createPostBusiness = async (
  inputData: postData,
  token: string
): Promise<void> => {
  const validateToken = getTokenData(token);
  if (!inputData.photo || !inputData.description || !inputData.type) {
    throw new Error(
      "Preencha todos os campos: 'photo', 'description' e 'type'."
    );
  }

  if (
    typeof inputData.photo !== "string" ||
    typeof inputData.description !== "string" ||
    typeof inputData.type !== "string"
  ) {
    throw new Error(
      "Os campos: 'photo', 'description' e 'type' devem estar no formato 'string'."
    );
  }

  if (!(inputData.type in TYPE)) {
    throw new Error("Type de ser 'NORMAL' ou 'EVENTO'");
  }

  const newPost: post = {
    id: idGenerator(),
    ...inputData,
    created_at: createDate(),
    user_id: validateToken.id,
  };

  await insertPost(newPost);
};
