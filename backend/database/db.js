const { Pool } = require('pg');

const pool = new Pool(
    process.env.DATABASE_URL
        ? {
            connectionString: process.env.DATABASE_URL,
            ssl: { rejectUnauthorized: false }
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

module.exports = pool;