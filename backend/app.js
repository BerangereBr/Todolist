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
        console.log("Origin reçu :", origin);
        callback(null, true); // pour tester, autorise tout
    },
    credentials: true
}));

app.use((req, res, next) => {
    console.log("URL reçue par Express :", req.url, req.method);
    next();
});

app.use('/auth', authRouter);
app.use('/todolists', todolistsRouter);
app.use('/todolists/:todolist_id/todos', todoRouter);
app.get('/api/health', (req, res) => {
    console.log('✅ /test route appelée !');
    return res.status(200).send('Test route OK');
});
module.exports = app;