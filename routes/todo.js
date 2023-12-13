const express = require('express');
const router = express.Router();

const {addTodo,fetchTodos, updateTodo, deleteTodo}= require('../controllers/todo')

router.route('/').post(addTodo).get(fetchTodos)
router.route('/:id').patch(updateTodo).delete(deleteTodo)

module.exports = router;