// db/index.js
const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  port: 5432,
  database: "postgres",
  user: "postgres",
  password: "Cswajevtg135624",
});

module.exports = {
  connect: async () => {
    await client.connect();
    console.log("Connected to PostgreSQL database");
  },
  query: async (sql, values) => {
    return await client.query(sql, values);
  },
  disconnect: async () => {
    await client.end();
    console.log("Disconnected from PostgreSQL database");
  },
};
