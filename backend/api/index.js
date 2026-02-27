const express = require('express');

const app = express();

app.use(express.json());

console.log("✅ api/index.js chargé et exécuté");
app.get('/test', (req, res) => {
    console.log('✅ /test route appelée !');
    res.status(200).send('Test route OK');
});
module.exports = app;