import axios from 'axios'
import { userAddress } from '../types'

const getAddress = async (cep:string):Promise<userAddress | null> => {
    try {
        const res = await axios.get(`https://viacep.com.br/ws/${cep}/json`)
        const address:userAddress = {
            city: res.data.localidade,
            neighborhood: res.data.bairro,
            state: res.data.uf,
            street: res.data.logradouro
        }

        return address
    } catch (error) {
        return error
    }
}

export default getAddress