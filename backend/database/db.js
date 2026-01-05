const { Pool } = require('pg');

const pool = new Pool({
    // user: process.env.PG_user,
    // host: process.env.PG_host,
    // database: process.env.PG_ddb,
    // password: process.env.PG_password,
    // port: process.env.PG_port,
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false // obligatoire pour Render
    }
})

pool.query('SELECT NOW()')
    .then(res => console.log('DB OK:', res.rows))
    .catch(err => console.error('DB ERROR:', err));

module.exports = pool;