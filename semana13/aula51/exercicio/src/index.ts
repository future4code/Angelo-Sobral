import app from "./app";
import getUserProfile from "./endpoints/getUserProfile";
import getUsers from "./endpoints/getUsers";
import login from "./endpoints/login";
import signUp from "./endpoints/signup";

app.post("/user/signup", signUp)
app.post("/user/login", login)
app.get("/users", getUsers)
app.get("/users/profile", getUserProfile)