import {Pool} from 'pg'

const pool = new Pool({
    user: 'postgres',
    password: 'admin',
    host: 'localhost',
    port: '8002',
    database: 'perntodo'
})

module.exports = pool;