import express from "express"

const app = express()

app.use(express.json())

app.listen(3003, () => {
    console.log("Servidor rodando na por 3003")
})

export default app