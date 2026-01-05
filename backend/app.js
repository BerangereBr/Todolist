const express = require('express');
const cors = require('cors');
const authRouter = require('./routes/authRouter');
const todolistsRouter = require('./routes/todolistRouter');
const todoRouter = require('./routes/todoRouter')
const app = express();

app.use(express.json());
app.use(cors({
    origin: '*',
}));

app.use('/api/auth', authRouter);
app.use('/api/todolists', todolistsRouter);
app.use('/api/todolists/:todolist_id/todos', todoRouter);

module.exports = app;