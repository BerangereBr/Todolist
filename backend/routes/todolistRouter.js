const express = require('express');
const { createTodolist, getTodolist, getAllTodolists, deleteTodolist } = require('../controllers/todolistControllers');
const authMiddleware = require('../middleware/authMiddleware')
const todolistRouter = express.Router();

todolistRouter.post('/', authMiddleware, createTodolist);
todolistRouter.get('/', authMiddleware, getAllTodolists);
todolistRouter.get('/:id', authMiddleware, getTodolist);
todolistRouter.delete('/:id', authMiddleware, deleteTodolist)

module.exports = todolistRouter;