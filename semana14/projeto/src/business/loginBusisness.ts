import { getUserByEmail } from "../data/getUserByEmail";
import { userLogin } from "../model/user";
import { createToken } from "../services/authenticator";
import { compareHash } from "../services/hashManager";

export const loginBusiness = async (userLogin: userLogin) => {
  if (!userLogin.email || !userLogin.password) {
    throw new Error("Preencha os campos: 'email' e 'password'.");
  }

  if (
    typeof userLogin.email !== "string" ||
    typeof userLogin.password !== "string"
  ) {
    throw new Error(
      "Os campos: 'email' e 'password', devem ser no formato 'string'."
    );
  }

  const userRequest = await getUserByEmail(userLogin.email);

  if (!userRequest) {
    throw new Error("Usuário não encontrado.");
  }

  const passwordIsCorrect = compareHash(
    userLogin.password,
    userRequest.password
  );

  if (!passwordIsCorrect) {
    throw new Error("Senha inválida!");
  }

  const token: string = createToken({
    id: userRequest.id,
  });

  return token;
};
