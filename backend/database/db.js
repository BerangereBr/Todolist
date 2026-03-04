const { Pool } = require('pg');

const pool = new Pool({
    host: process.env.PG_HOST,
    user: process.env.PG_USER,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
    ssl: { rejectUnauthorized: false }          // nécessaire pour Supabase
});

pool.query('SELECT NOW()')
    .then(res => console.log('DB OK:', res.rows[0]))
    .catch(err => console.error('DB ERROR:', err));

module.exports = pool;