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
    try {
      const { username, password } = req.query.data;
      console.log(req);
      const dbResponse = await User.getUser(username, password);

      const isCorrect = await bcrypt.compare(password, dbResponse.password);
      if (isCorrect) {
        console.log(dbResponse);
        const { username, email, password, subscribtion } = dbResponse;
        jwt.sign(
          { subscribtion },
          "privateKey",
          { expiresIn: "5m" },
          (err, token) => {
            if (err) {
              console.log(err);
            }
            res.send(token);
          }
        );
      }
    } catch (error) {
      console.log(error);
    }
  },
  data: async (req, res) => {
    jwt.verify(req.token, "privateKey", (err, authorizedData) => {
      if (err) {
        console.log(err);
        res.sendStatus(403);
      } else {
        res.json({
          message: "Successful log in",
          authorizedData,
        });
        console.log("SUCCESS: Connected to protected route");
      }
    });
  },
};
