const pg = require("pg");

const { Client } = pg;

const client = new Client({
  host: "localhost",
  port: 5432,
  database: "postgres",
  user: "postgres",
  password: "Cswajevtg135624",
});

module.exports = {
  Connect: async () => {
    await client.connect();
  },
  Sql: async (query, values) => {
    const result = await client.query(query, values);
    return result;
  },
  Disconnect: async () => {
    await client.end();
  },
};
