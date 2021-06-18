const login = require('./login');
const User = require('./user');
const router = require('express').Router();

router.use('/login', login);
router.use('/user', User);

module.exports = router;