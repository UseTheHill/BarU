const login = require("./login");
const logout = require("./logout");
const User = require("./user");
const router = require("express").Router();

router.use("/login", login);
router.use("/logout", logout);
router.use("/user", User);

module.exports = router;
