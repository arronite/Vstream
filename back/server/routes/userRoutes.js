const expres = require("express");
const router = expres.Router();
const { signUp, login } = require("../controller/authenticationController");

router.get("/login", login);
router.post("/signUp", signUp);

module.exports = router;
