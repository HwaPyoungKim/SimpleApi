import { Router } from "express";
import {
    createTask,
    listTasks,
    getTaskById,
    updateTaskPut,
    updateTaskPatch,
    deleteTask,
} from "../controllers/tasks.controller.js"

const router = Router();

router.post("/", createTask);
router.get("/", listTasks);
router.get("/:id", getTaskById);
router.put("/:id", updateTaskPut);
router.patch("/:id", updateTaskPatch);
router.delete("/:id", deleteTask);

export default router;