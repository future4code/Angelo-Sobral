import knex from 'knex'
import dotenv from 'dotenv'

dotenv.config()

const connection = knex({
    client: "mysql",
    connection: {
        host: "35.226.146.116",
        user: "2114362-angelo-odwyer",
        password: "eB$hBd#D0ZZ@VFnjzfra",
        database: "cruz-2114362-angelo-odwyer",
        port: 3306,
        multipleStatements: true
    }
})

export default connection