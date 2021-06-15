import { app } from "./controller/app"
import { taskRouter } from "./routes/taskRoutes"
import { userRouter } from "./routes/userRoutes"

app.use("/users", userRouter)
app.use("/tasks", taskRouter)

