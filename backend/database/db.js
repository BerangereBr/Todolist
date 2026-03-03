// database/db.js
const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL, // doit inclure le mot de passe correct
    ssl: { rejectUnauthorized: false }          // nécessaire pour Supabase
});

pool.query('SELECT NOW()')
    .then(res => console.log('DB OK:', res.rows[0]))
    .catch(err => console.error('DB ERROR:', err));

module.exports = pool;