import express from 'express'

export const app = express()

app.use(express.json())
app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
})