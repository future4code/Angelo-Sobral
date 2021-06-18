import { getUserByEmail } from "../../data/getUserByEmail";
import { insertUser } from "../../data/insertUser";
import { userData } from "../../model/user";
import { createToken } from "../../services/authenticator";
import { createHash } from "../../services/hashManager";
import { idGenerator } from "../../services/idGenerator";

export const signupBusiness = async (userData: userData): Promise<string> => {
  if (!userData.name || !userData.email || !userData.password) {
    throw new Error("Preencha todos os campos: 'name', 'email' e 'password'.");
  }

  if (
    typeof userData.name !== "string" ||
    typeof userData.email !== "string" ||
    typeof userData.password !== "string"
  ) {
    throw new Error("Os campos: 'name', 'email' e 'password', devem ser no formato 'string'.");
  }

  const userRequest = await getUserByEmail(userData.email)

  if(userRequest) {
    throw new Error("Email já cadastrado!")
  }

  const cypherPassword = createHash(userData.password as string);

  const newUser = {
    id: idGenerator(),
    ...userData,
    password: cypherPassword,
  };

  await insertUser(newUser);

  const token: string = createToken({
    id: newUser.id,
  });

  return token;
};
