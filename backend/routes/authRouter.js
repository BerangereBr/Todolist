const express = reuquire('express');
const { signUp, login } = require('../controllers/authControllers')
const router = express.Router;

router.post('/sign', signUp);
router.post('/login', login);

module.exports = router