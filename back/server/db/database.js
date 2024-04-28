const pg = require("pg");

const { Pool } = pg;

const pool = new Pool({
  host: "localhost",
  port: 5432,
  database: "vstreamer",
  user: "postgres",
  password: "Cswajevtg135624",
});

module.exports = {
  Connect: async () => {
    await pool.connect();
  },
  Sql: async (query, values) => {
    const result = await pool.query(query, values);
    return result;
  },
  Disconnect: async () => {
    await pool.end();
  },
};
