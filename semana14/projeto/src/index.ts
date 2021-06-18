import { app } from "./controller/app";
import { postRouter } from "./router/postRoutes";
import { userRouter } from "./router/userRoutes";

app.use("/user", userRouter)
app.use("/post", postRouter)