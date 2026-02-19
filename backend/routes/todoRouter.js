const express = require('express');
const { createTodo, getAllTodos, checkTodo, deleteTodo } = require('../controllers/todoControllers')
const authMiddleware = require('../middleware/authMiddleware')
const todoRouter = express.Router({ mergeParams: true });

todoRouter.post('/', authMiddleware, createTodo);
todoRouter.get('/', authMiddleware, getAllTodos);
todoRouter.delete('/:todo_id', authMiddleware, deleteTodo);
todoRouter.put('/:todo_id', authMiddleware, checkTodo)

module.exports = todoRouter;