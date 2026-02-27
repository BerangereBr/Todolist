const { Pool } = require('pg');

const isProduction = process.env.NODE_ENV === 'production';

const pool = new Pool(
    isProduction
        ? {
            connectionString: process.env.DATABASE_URL,
            ssl: { rejectUnauthorized: false }, // Supabase
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
console.log("NODE_ENV:", process.env.NODE_ENV);
console.log("DATABASE_URL:", process.env.DATABASE_URL);
console.log("PG_host:", process.env.PG_host);
pool.query('SELECT NOW()')
    .then(res => console.log('DB OK:', res.rows[0]))
    .catch(err => console.error('DB ERROR:', err));

module.exports = pool;
