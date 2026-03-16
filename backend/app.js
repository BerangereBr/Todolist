const express = require('express');
const cors = require('cors');
const authRouter = require('./routes/authRouter');
const todolistsRouter = require('./routes/todolistRouter');
const todoRouter = require('./routes/todoRouter')
const app = express();

app.use(express.json());

const allowedOrigins = [
    'https://todolist-ten-pearl-25.vercel.app',
    'http://localhost:5173'
];

app.use(cors({
    origin: (origin, callback) => {
        if (!origin) return callback(null, true);

        if (allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            console.log("❌ Origine interdite :", origin);
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
}));


app.use('/api/auth', authRouter);
app.use('/api/todolists', todolistsRouter);
app.use('/api/todolists/:todolist_id/todos', todoRouter);
module.exports = app;