import * as jwt from 'jsonwebtoken'

const expiresIn = "1min"

export const createToken = (payload: authData):string => {
    const token = jwt.sign(
        { id: payload.id }, process.env.JWT_KEY as string, {expiresIn}
    )

    return token
}

type authData = {
    id: string
}