const express = require('express');
const { insertTodo, getTodos, updateTodo, deleteTodo, getSingleTodo } = require('../controllers/todoController');

const router = express.Router();

//Get Todos
router.get('/todos', getTodos);

//Get Single Todo
router.get('/todo/:id', getSingleTodo);

//Insert Todo
router.post('/todo',insertTodo);

//Update Todo
router.patch('/todo/:id', updateTodo);

//Delete Todo
router.delete('/todo/:id', deleteTodo);


module.exports = router;