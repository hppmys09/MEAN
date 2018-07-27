// app/models/todo.js

// load mongoose since we need it to define a model
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ToDoSchema = new Schema({
	text : String,
	done : Boolean
});

const ToDo = mongoose.model('todo',ToDoSchema);

module.exports = ToDo;