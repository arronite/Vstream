const { Connect, Sql, Disconnect, Test } = require("../db/database");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

module.exports = {
  signUp: async (req, res) => {
    const { username, email, password } = req.body;
    // const hashedPassword = await User.hashPassword(password);
    const result = await User.AddUser(username, email, password);
    res.json(result);
  },
  login: async (req, res) => {
    const { username, password } = req.query;
    const dbResponse = await User.getUser(username, password);
    // console.log(dbPassword);
    const isCorrect = await bcrypt.compare(password, dbResponse.password);
    if (isCorrect) {
      console.log(dbResponse);
      const { username, email, password, subscribtion } = dbResponse;
      const token = jwt.sign({ username, email, subscribtion }, password, {
        expiresIn: "3h",
      });
      res.send(token);
    }
  },
};
