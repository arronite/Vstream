const db = require("../db/database");

class User {
  static getAllUsers = async () => {
    db.Connect();
    const res = await db.Sql("SELECT * FROM users");

    db.Disconnect();
  };
  static addUser = async () => {
    db.Connect();
    const res = await db.Sql(
      `INSERT INTO users (email, password, username) VALUES ('tedsasst@gmail.com', 'test', 'tester');
      `
    );
    db.Disconnect();
    console.log(res);
  };
}
module.exports = User;
