const express = require('express');
const app = express();

app.use(express.json());

const serverless = require('serverless-http');

app.get('/test', (req, res) => {
    console.log('✅ /test route appelée !');
    res.status(200).send('Test route OK');
});

console.log("✅ api/index.js chargé et exécuté");
module.exports = serverless(app);