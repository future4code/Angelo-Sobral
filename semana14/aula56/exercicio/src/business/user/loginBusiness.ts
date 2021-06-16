import { compare } from "../../services/hashManager"
import { selectUserByEmail } from "../../data/user/selectUserByEmail"
import { generateToken } from "../../services/authenticator"
import { loginInputDTO, user } from "../../model/user"

export const loginBusiness = async (
   loginInput: loginInputDTO
) => {
   if (!loginInput.email || !loginInput.password) {
      throw new Error("'email' e 'senha' são obrigatórios")
   }

   if(loginInput.email !== "string" || loginInput.password !== "string") {
      throw new Error("Formato digitado não corresponde a uma string.")
   }

   const user: user = await selectUserByEmail(loginInput.email)

   if (!user) {
      throw new Error("Usuário não encontrado ou senha incorreta")
   }

   const passwordIsCorrect: boolean = await compare(loginInput.password, user.password)

   if (!passwordIsCorrect) {
      throw new Error("Usuário não encontrado ou senha incorreta")
   }

   const token: string = generateToken({
      id: user.id,
      role: user.role
   })

   return token
}