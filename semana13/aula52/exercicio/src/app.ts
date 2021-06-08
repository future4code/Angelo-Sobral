import express from 'express'
import { AddressInfo } from 'net'

const app = express()

app.use(express.json())

const server = app.listen(3003, () => {
    if (server) {
        const adress = server.address() as AddressInfo
        console.log(`Servidor rodando em http://localhost:${adress.port}`)
    } else {
        console.error('Falha ao iniciar servidor.')
    }
})

export default app