const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.PG_user,
    host: process.env.PG_host,
    database: process.env.PG_ddb,
    password: process.env.PG_password,
    port: process.env.PG_port
})

module.exports = pool;