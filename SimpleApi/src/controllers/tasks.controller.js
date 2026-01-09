import { tasks, nextId } from "../data/tasks.db.js";
import * as db from "../data/tasks.db.js";

function parseId(req){
    const id = Number(req.params.id);
    return Number.isFinite(id) ? id : null;
}

export function createTask(req, res) {
    const { title, done } = req.body;

    if (typeof title != "string" || title.trim() === ""){
        return res.status(400).json({ error: "title debe ser un string no vacio"});
    }

    if(done !== undefined && typeof done != "boolean"){
        return res.status(400).json({ error: "done debe ser boolean (si se envia)"});
    }

    const newTask = {
        id: db.nextId++,
        title: title.trim(),
        done: done ?? false,
    };

    tasks.push(newTask);
    return res.status(201).json(newTask);
}

export function listTask(res){
    return res.json(tasks);
}

export function getTaskById(req,res){

}

export function updateTaskPut(req,res){

}

export function updateTaskPatch(req,res){

}

export function deleteTask(req,res){
    
}