const express = require('express');
const app = express();

app.use(express.json());

// Routes de test
app.get('/test', (req, res) => {
    console.log('✅ /test route appelée !'); // apparaît dans les logs Vercel
    res.send('Test route OK');
});

app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});

// Exporter directement 