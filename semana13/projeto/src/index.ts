import app from "./app";
import createRecipe from "./endpoints/createRecipe";
import createUser from "./endpoints/createUser";
import getProfileById from "./endpoints/getProfileById";
import getRecipeById from "./endpoints/getRecipeById";
import getUserProfile from "./endpoints/getUserProfile";
import login from "./endpoints/login";

app.post("/cookenu/signup", createUser)
app.post("/cookenu/login", login)
app.post("/cookenu/recipe", createRecipe)

app.get("/cookenu/profile", getUserProfile)
app.get("/cookenu/user/:id", getProfileById)
app.get("/cookenu/recipe/:id", getRecipeById)