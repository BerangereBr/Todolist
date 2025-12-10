const express = require('express');
const { createTodolist, getTodolists, getAllTodolists } = require('../controllers/todolistControllers')
const router = express.Router();

router.post('/todolists', createTodolist);
router.get('/todolists', getAllTodolists);
router.get('/todolists/:id', getTodolists);


module.exports = router;