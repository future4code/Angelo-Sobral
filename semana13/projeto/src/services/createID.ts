import {v4} from 'uuid'

const createID = ():string => {
    return v4()
}

export default createID