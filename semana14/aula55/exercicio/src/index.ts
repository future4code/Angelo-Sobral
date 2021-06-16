import { app } from "./controller/app"
import { deleteUser } from "./controller/deleteUser"
import { getAllUsers } from "./controller/getAllUsers"
import { login } from "./controller/login"
import { signup } from "./controller/signup"

app.post("/signup", signup)
app.post("/login", login)

app.get("/all", getAllUsers)

app.delete("/user/:id", deleteUser)