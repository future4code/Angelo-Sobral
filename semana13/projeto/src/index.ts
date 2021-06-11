import app from "./app";
import createUser from "./endpoints/createUser";
import getUserProfile from "./endpoints/getUserProfile";
import login from "./endpoints/login";

app.post("/cookenu/signup", createUser)
app.post("/cookenu/login", login)

app.get("/cookenu/profile", getUserProfile)