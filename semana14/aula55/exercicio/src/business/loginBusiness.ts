import { User } from "../model/user";
import { getUserByEmail } from "../data/getUserByEmail"
import { generateToken } from "../services/authenticator";
import { compareHash } from "../services/hashManager";

export const loginBusiness = async (
  email: string,
  password: string
) => {
  if (!email || !password) {
    throw new Error("É obrigatório informar email e senha.");
  }

  const user: User = await getUserByEmail(email);

  if (!user) {
    throw new Error("Usuário não encontrado.");
  }

  const passwordIsCorrect: boolean = await compareHash(password, user.password);

  if (!passwordIsCorrect) {
    throw new Error("Senha incorreta.");
  }

  const token: string = generateToken({
    id: user.id,
    role: user.role,
  });

  return token;
};
