const expres = require("express");
const router = expres.Router();
const checkToken = require("../middleware/checkToken");
const {
  signUp,
  login,
  data,
} = require("../controller/authenticationController");

router.get("/login", login);

router.post("/signUp", signUp);
router.get("/data", checkToken, data);

module.exports = router;
