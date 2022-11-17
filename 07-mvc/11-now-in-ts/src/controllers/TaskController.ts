import { RequestHandler } from "express";

import {Task} from "../models/Task";


export const createTask: RequestHandler = (req, res) => {
    res.render('tasks/create');
}

export const createTaskSave: RequestHandler = async (req, res) => {

    const task = {
        title: req.body.title,
        description: req.body.description,
        done: false
    }

    await Task.create(task);

    res.redirect('/tasks');
}

export const showTasks: RequestHandler = async (req, res) => {
    
    const tasks = await Task.findAll({raw: true});

    res.json({ message: "sucesso", data: tasks})
    res.render('tasks/all', {tasks});
}

export const removeTask: RequestHandler = async (req, res) => {
    const id = req.body.id;

    await Task.destroy({where: {id: id}});
    
    res.redirect('/tasks');
}

export const updateTask: RequestHandler = async (req, res) => {
    
    const id = req.params.id;

    const task = await Task.findOne({where: {id: id}, raw: true});

    res.render('tasks/edit', {task});
}

export const updateTaskPost: RequestHandler = async (req, res) => {

    const id = req.body.id;

    const task = {
        title: req.body.title,
        description: req.body.description
    }

    await Task.update(task, {where: {id: id}});

    res.redirect('/tasks');
}

export const toggleTaskStatus: RequestHandler = async (req, res) => {

    const id = req.body.id;

    const task = {
        done: req.body.done === '0' ? true : false
    }

    await Task.update(task, {where: {id: id}});

    res.redirect('/tasks');
}
