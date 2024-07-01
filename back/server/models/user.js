const { Sql } = require("../db/database");
const bcrypt = require("bcrypt");

class User {
  static getUser = async (username, email, password) => {
    try {
      const res = await Sql(
        `SELECT *
      FROM users
      WHERE (email = $1 OR username = $2)
       `,
        [email, username]
      );

      return res.rows[0]; // Return array of users
    } catch (error) {
      console.error(`database error: ${error}`);
      throw error;
    } finally {
    }
  };

  static CheckUsernameExists = async (username) => {
    try {
      const res = await Sql("SELECT * FROM users WHERE username = $1", [
        username,
      ]);
      return res.rowCount > 0; // Return true if username exists, false otherwise
    } catch (error) {
      console.error(`database error: ${error}`);
      throw error;
    } finally {
    }
  };

  static AddUser = async (username, email, password) => {
    try {
      const isValid = await User.CheckUsernameExists(username); // Updated to use User.CheckUsernameExists
      if (isValid) {
        return false;
      } else {
        const hashedPassword = await User.hashPassword(password); // Updated to use User.hashPassword
        const res = await Sql(
          `INSERT INTO users (username, email, password) VALUES ($1, $2, $3)`,
          [username, email, hashedPassword]
        );

        return res; // Check if any rows were affected
      }
    } catch (error) {
      console.error(`database error: ${error}`);
      throw error;
    } finally {
    }
  };

  static hashPassword = async (password) => {
    const saltRounds = 10; // Number of salt rounds for bcrypt
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  };
}

module.exports = User;
