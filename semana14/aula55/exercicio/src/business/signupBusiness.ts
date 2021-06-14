import { insertUser } from "../data/insertUser";
import { UserData } from "../model/user";
import { generateToken } from "../services/authenticator";
import { createHash } from "../services/hashManager";
import { generateId } from "../services/idGenerator";

export const signupBusiness = async (userData: UserData): Promise<string> => {
  if (
    !userData.email ||
    !userData.name ||
    !userData.password ||
    !userData.role
  ) {
    throw new Error("Preencha todos os campos.");
  }

  const hashPassword = await createHash(userData.password);

  const newUser = {
    id: generateId(),
    ...userData,
    password: hashPassword,
  };

  await insertUser(newUser)

  const token: string = generateToken({
    id: newUser.id,
    role: newUser.role,
  });

  return token;
};
