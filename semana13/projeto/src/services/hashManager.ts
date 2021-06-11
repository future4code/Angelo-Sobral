import {genSaltSync, hashSync, compareSync} from 'bcryptjs'

export const createHash = (password:string) => {
    const salt:string = genSaltSync(12)

    return hashSync(password, salt)
}

export const compareHash = (password:string, hash:string):boolean => {
    return compareSync(password, hash)
}