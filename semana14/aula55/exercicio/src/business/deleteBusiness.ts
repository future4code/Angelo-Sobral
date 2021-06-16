import { deleteUserById } from "../data/deleteUserById"
import { getTokenData } from "../services/authenticator"

export const deleteBusiness = async (id: string, token: string) => {
    const validateToken = getTokenData(token)
    
    if (validateToken.role !== "ADMIN") {
        throw new Error("Apenas administradores podem deletar usuários.")
    }

    await deleteUserById(id)
}