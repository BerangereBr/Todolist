const express = require('express');
const app = express();

app.use(express.json());

app.get('/test', (req, res) => res.send('Test route OK'));
app.get('/health', (req, res) => res.json({ status: 'ok' }));

// Export explicite d'une fonction HTTP pour Vercel
module.exports = (req, res) => app(req, res);