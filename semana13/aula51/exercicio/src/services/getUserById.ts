import connection from "../connection"

export const getUserById = async (id: string) => {
    const [result] = await connection('User')
    .select('*').where({id})

    return result
}