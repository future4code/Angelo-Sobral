import * as jwt from 'jsonwebtoken'

const expiresIn = "10min"

export const createToken = (payload: authData):string => {
    const token = jwt.sign(
        { id: payload.id }, process.env.JWT_KEY as string, {expiresIn}
    )
    return token
}

export const getData = (token: string):authData => {
    return jwt.verify(token, process.env.JWT_KEY!) as authData // ! obriga o valor ser uma string
}

type authData = {
    id: string
}