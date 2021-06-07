import app from "./app";
import getUsers from "./endpoints/getUsers";
import signUp from "./endpoints/signup";

app.post("user/signup", signUp)
app.get("users", getUsers)