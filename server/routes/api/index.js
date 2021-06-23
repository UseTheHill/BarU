// const Login = require("./login");
// const Logout = require("./logout");
const User = require("./user");
// const Post = require("./post-routes-test");
const router = require("express").Router();

// router.use("/login", Login);
// router.use("/logout", Logout);
router.use("/user", User);
// router.use("/post", Post);


module.exports = router;
