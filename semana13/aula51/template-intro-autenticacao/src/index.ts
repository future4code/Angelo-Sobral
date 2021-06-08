import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import getUsers from './endpoints/getUsers'
import { generatedID } from "./services/idGenerator"
import { generateToken, getTokenData } from "./services/autheticator"
import login from "./endpoints/login"

app.post('/user/signup', createUser)
app.post('/user/login', login)
app.put('/user/edit/:id', editUser)
app.get('/users', getUsers)