import { Router } from "express";

import {
    createTask,
    createTaskSave,
    showTasks,
    removeTask,
    updateTask,
    updateTaskPost,
    toggleTaskStatus

} from "../controllers/TaskController"

const router = Router();

router.get('/add', createTask);
router.post('/add', createTaskSave);
router.post('/remove', removeTask);
router.get('/edit/:id', updateTask);
router.post('/edit', updateTaskPost);
router.post('/updatestatus', toggleTaskStatus);
router.get('/', showTasks);

export default router;