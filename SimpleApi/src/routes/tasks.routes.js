import { Router } from "express";
import {
    createTask,
    listTask,
    getTaskById,
    updateTaskPut,
    updateTaskPatch,
    deleteTask,
} from "../controllers/tasks.controller.js"

const router = Router();

router.post("/", createTask);
router.get("/", listTask);
router.get("/:id", getTaskById);
router.put("/:id", updateTaskPut);
router.patch("/:id", updateTaskPatch);
router.delete("/:id", deleteTask);

export default router;