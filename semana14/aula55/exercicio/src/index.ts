import { app } from "./controller/app"
import { signup } from "./controller/signup"

app.post("/user", signup)