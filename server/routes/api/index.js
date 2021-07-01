const router = require("express").Router();
// const Login = require("./login");
// const Logout = require("./logout");
const User = require("./user");
const Register = require('./register');
//const Post = require("./post-routes-test");


// router.use("/login", Login);
// router.use("/logout", Logout);
router.use("/user", User);
router.use("/register", Register)
//router.use("/post", Post);


module.exports = router;
