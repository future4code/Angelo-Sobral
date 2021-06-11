import app from "./app";
import getUsers from "./endpoints/getUsers";
import login from "./endpoints/login";
import signUp from "./endpoints/signUp";

app.get('/users', getUsers)
app.post('/user/signup', signUp)
app.post('/user/login', login)