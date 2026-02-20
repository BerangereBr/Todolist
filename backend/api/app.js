const express = require('express');
const cors = require('cors');
const authRouter = require('../routes/authRouter');
const todolistsRouter = require('../routes/todolistRouter');
const todoRouter = require('../routes/todoRouter')
const app = express();

app.use(express.json());

const allowedOrigins = [
    'https://todolist-ten-pearl-25.vercel.app',
    'http://localhost:5173'
];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
}));


app.use('/api/auth', authRouter);
app.use('/api/todolists', todolistsRouter);
app.use('/api/todolists/:todolist_id/todos', todoRouter);
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
});
module.exports = app;