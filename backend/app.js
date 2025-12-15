const express = require('express');
const cors = require('cors');
const authRouter = require('./routes/authRouter');
const todolistsRouter = require('./routes/todolistRouter')
const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/auth', authRouter);
app.use('/api/todolists', todolistsRouter);

module.exports = app;