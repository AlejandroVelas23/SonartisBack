// db.js
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',        // Reemplázalo con tu usuario de PostgreSQL
  host: 'localhost',
  database: 'sys_citas_S', // Reemplázalo con el nombre de tu base de datos
  password: 'admin', // Reemplázalo con tu contraseña
  port: 5432,
});

module.exports = pool;
