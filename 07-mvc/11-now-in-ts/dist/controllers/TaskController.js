"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggleTaskStatus = exports.updateTaskPost = exports.updateTask = exports.removeTask = exports.showTasks = exports.createTaskSave = exports.createTask = void 0;
const Task_1 = require("../models/Task");
const createTask = (req, res) => {
    res.render('tasks/create');
};
exports.createTask = createTask;
const createTaskSave = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const task = {
        title: req.body.title,
        description: req.body.description,
        done: false
    };
    yield Task_1.Task.create(task);
    res.redirect('/tasks');
});
exports.createTaskSave = createTaskSave;
const showTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tasks = yield Task_1.Task.findAll({ raw: true });
    res.json({ message: "sucesso", data: tasks });
    res.render('tasks/all', { tasks });
});
exports.showTasks = showTasks;
const removeTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.body.id;
    yield Task_1.Task.destroy({ where: { id: id } });
    res.redirect('/tasks');
});
exports.removeTask = removeTask;
const updateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const task = yield Task_1.Task.findOne({ where: { id: id }, raw: true });
    res.render('tasks/edit', { task });
});
exports.updateTask = updateTask;
const updateTaskPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.body.id;
    const task = {
        title: req.body.title,
        description: req.body.description
    };
    yield Task_1.Task.update(task, { where: { id: id } });
    res.redirect('/tasks');
});
exports.updateTaskPost = updateTaskPost;
const toggleTaskStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.body.id;
    const task = {
        done: req.body.done === '0' ? true : false
    };
    yield Task_1.Task.update(task, { where: { id: id } });
    res.redirect('/tasks');
});
exports.toggleTaskStatus = toggleTaskStatus;
