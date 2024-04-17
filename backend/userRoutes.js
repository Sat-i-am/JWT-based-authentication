
const {register, deleteUser, login, tokenauthentication, hello} = require('./userController');

const router = require('express').Router();

router.post('/register',register);
router.post('/delete', tokenauthentication, deleteUser)
router.post('/login',login)

module.exports = router;     