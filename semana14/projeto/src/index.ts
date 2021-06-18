import { app } from "./controller/app";
import { userRouter } from "./router/userRoutes";

app.use("/user", userRouter)