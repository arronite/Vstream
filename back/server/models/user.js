const { Connect, Sql, Disconnect } = require("../db/database");
const bcrypt = require("bcrypt");

class User {
  static getAllUsers = () => {
    // db.Connect();
    // const res = await db.Sql("SELECT * FROM users");

    // db.Disconnect();
    console.log("Dummy");
  };
  static addUser = async (user_name, email, password) => {
    try {
      Connect();
      const isValid = Sql(`SELECT * FROM users WHERE user_name=${user_name}`);
      if (isValid) {
        return false;
      } else {
        const res = Sql(`INSERT INTO users (userName,email,password)
        VALUES(${user_name}, ${email}, ${password})`);
        Disconnect();
        return res;
      }
    } catch (error) {
      console.log(`database error: ${error}`);
    }
  };
  static hashPassword = async (password) => {
    const salt = await bcrypt.genSaltSync();
    const hash = await bcrypt.hashSync(password, salt);
    return hash;
  };
}

module.exports = User;
