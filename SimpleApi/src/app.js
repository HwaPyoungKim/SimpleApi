import express from "express";
import tasksRouter from "./routes/tasks.routes.js"

const app = express();

app.use(express.json())

app.get("/health",(req,res) => {
    res.json({ ok: true})
});

app.use("/tasks", tasksRouter);

export default app;