const pg = require("pg");

const { Client } = pg;

const client = new Client({
  host: "localhost",
  port: 5432,
  database: "postgres",
  user: "postgres",
  password: "Cswajevtg135624",
});
const reader = async () => {
  await client.connect();

  const result = await client.query("SELECT * from users");
  console.log(result);

  await client.end();
};
reader();
