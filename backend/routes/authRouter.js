const express = reuquire('express');
const { sign, login } = require('../controllers/authControllers')
const router = express.Router;

router.post('/sign', sign);
router.post('/login', login);

module.exports = router