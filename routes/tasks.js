import * as TaskService from "../services/tasks.js";
import express from "express";

const taskRouter = express.Router();

taskRouter.post("/tasks", TaskService.createTask);
taskRouter.get("/tasks", TaskService.getAllTask);
taskRouter.get("/tasks/:id", TaskService.getTaskById);
taskRouter.delete("/tasks/:id", TaskService.deleteTask);
taskRouter.put("/tasks/:id", TaskService.updateTask);

export default taskRouter;
