const { Connect, Sql, Disconnect, Test } = require("../db/database");

const User = require("../models/user");

module.exports = {
  signUp: async (req, res) => {
    const { user_name, email, password } = req.body;
    const hashedPassword = await User.hashPassword(password);
    User.addUser(user_name, email, hashedPassword);
  },
  login: async (req, res) => {
    console.log(User.getAllUsers());
  },
};
