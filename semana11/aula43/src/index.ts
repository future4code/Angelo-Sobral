import express, { Request, Response } from 'express'
import cors from 'cors'
import {countries, country} from './countries'

const app = express()

app.use(express.json())
app.use(cors())

//Exercicio 1
app.get('/countries/all', (req: Request, res: Response) => {

    const result = countries.map(item => ({
        id: item.id,
        name: item.name
    }))

     res
    .status(200)
    .send(result)
})

//Exercicio 3
app.get('/countries/search', (req: Request, res: Response) => {

    let result:country[] = countries
    
    if (req.query.name) {
        let reqName = req.query.name as string
        result = result.filter(c => c.name.toLowerCase().includes(reqName.toLowerCase()))
    }
    if (req.query.capital) {
        let reqCapital = req.query.capital as string
        result = result.filter(c => c.capital.toLowerCase().includes(reqCapital.toLowerCase()))
    }
    if (req.query.continent) {
        let reqContinent = req.query.continent as string
        result = result.filter(c => c.continent.toLowerCase().includes(reqContinent.toLowerCase()))
    }
    if(!req.query.name && !req.query.capital && !req.query.continent) {
        res.status(400).send('Erro')
    }

    res
    .status(200).send(result)
})

//Exercicio 4
app.put('/countries/edit/:id', (req: Request, res: Response) => {

    const name: string = req.body.name
    const capital: string = req.body.capital

    if (!name && !capital) {
        res.status(400).send('É necessário alterar país e capital')
    }
    
    if (name) {
        for(let country of countries) {
            if ( country.id === Number(req.params.id)) {
                country.name = name
            }
        }
    }

    if (capital) {
        for(let country of countries) {
            if ( country.id === Number(req.params.id)) {
                country.capital = capital
            }
        }
    }
    
    
    const result = countries.filter(c => c.id === Number(req.params.id))
    .map(item => ({nome: item.name, capital: item.capital}))

    res.status(200).send(result)

})

//Exercicio 2
app.get('/countries/:id', (req: Request, res: Response) => {

    const result: country | undefined = countries.find(c => c.id === Number(req.params.id))

    if(result) {
        res
        .status(200)
        .send(result)
    } else {
        res
        .status(404)
        .send('Não encontrado')
    }
})

app.listen(3003, () => {
    console.log('Iniciado em http://localhost:3003')
})