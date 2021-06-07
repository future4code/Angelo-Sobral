import { Request, Response } from "express";
import app from "./app";
import { connection } from "./connection";

// exercicio 1 a
// veio todas as informações normais dentro de um array, mais as infos do sql

const getActorById = async (id: number) => {
  const result = await connection.raw(`
    SELECT * FROM Actor
    WHERE id = '${id}'
  `);

  return result[0][0];
};


// letra b
const getActorByName = async(name:string) => {
    const result = await connection.raw(`
        SELECT * FROM Actor
        WHERE name = '${name}'
    `)
    return result
}

app.get('/name', async(req,res) => {
    try {
        const name = req.query.name as string

        const result = await getActorByName(name)

        res.status(200)
        .send(result[0])
        
    } catch (error) {
        res.status(400)
        .send({message: error.message})
    }
})

// letra c
const getActorByGender = async(gender: string) => {
    const result = await connection.raw(`
        SELECT COUNT(*) as count
        FROM Actor
        WHERE gender = '${gender}'
    `)
    const count = result[0][0].count
    return count
}

// exercicio 2 letra a
const updateActor = async(id:number, salary:number) => {
    await connection('Actor')
    .update({
        salary: salary,
    })
    .where('id', id)
}

// letra b
const deleteActor = async(id:number) => {
    await connection('Actor')
    .delete().where('id', id)
}

// letra c
const avgByGender = async(gender: string) => {
    const result = await connection('Actor')
    .avg()
    .where('gender', gender)

    return result
}

// exercicio 3 letra a
app.get("/actor/:id", async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
  
      const result = await getActorById(id);
  
      res.status(200).send(result);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Unexpected error!");
    }
  });

// letra b
app.get("/actor", async (req: Request, res: Response) => {
    try {
        const gender = req.query.gender as string;
        
        const result = await getActorByGender(gender)

        res.status(200)
        .send({quantity: result}) 
    } catch (err) {
        res.status(400)
        .send({message: err.message})
    }
})

// exercicio 4 letra a
app.post('/actor', async(req, res) => {
    try {
        const {salary, id} = req.body

        const result = await updateActor(id, salary)

        res.status(200)
        .send({message: 'Ok!'})
    } catch (error) {
        res.status(400)
        .send({message: error.message})
    }
})

//letra b
app.delete('/actor/:id', async(req, res) => {
    try {
        const id = Number(req.params.id)

        const result = await deleteActor(id)

        res.status(200)
        .send({message: 'Deleted Actor!'})
    } catch (error) {
        res.status(400)
        .send({message: error.message})
    }
})