import * as jwt from 'jsonwebtoken'

export type authenticationData = {
    id: string;
}

export function generateToken (payload: authenticationData): string {
    return jwt.sign(payload, process.env.JWT_KEY!, { expiresIn: '1y' })
}

export function getTokenData (token: string): authenticationData {
    return jwt.verify(token, process.env.JWT_KEY!) as authenticationData
}