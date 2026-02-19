const { Pool } = require('pg');

const isProduction = process.env.NODE_ENV === 'production';
console.log('Mode production ?', isProduction);

const pool = new Pool(
    isProduction
        ? {
            connectionString: process.env.DATABASE_URL,
            ssl: { rejectUnauthorized: false }, // Supabase
            family: 4
        }
        : {
            user: process.env.PG_user,
            host: process.env.PG_host,
            database: process.env.PG_ddb,
            password: process.env.PG_password,
            port: process.env.PG_port,
            ssl: false
        }
);

pool.query('SELECT NOW()')
    .then(res => console.log('DB OK:', res.rows[0]))
    .catch(err => console.error('DB ERROR:', err));

module.exports = pool;
