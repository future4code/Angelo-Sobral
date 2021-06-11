import app from "./app";
import createUser from "./endpoints/createUser";

app.post("/cookenu/signup", createUser)
app.get("/cookenu/profile", )