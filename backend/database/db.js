const { Pool } = require('pg');

console.log("🔎 Variables d'environnement :");
console.log("PG_HOST:", process.env.PG_HOST);
console.log("PG_USER:", process.env.PG_USER);
console.log("PG_DATABASE:", process.env.PG_DATABASE);
console.log("PG_PORT:", process.env.PG_PORT);
console.log("PG_PASSWORD existe ?", !!process.env.PG_PASSWORD);

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