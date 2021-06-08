import connection from "../connection"

export const getUserByEmail = async (email: string) => {
    const [result] = await connection('User')
    .select('*').where({email})

    return result
}