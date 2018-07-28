
const ToDo = require('../models/todo');

module.exports = 	{
	get(req,res,next)	{
		ToDo.find()
		.then(todo =>	{
			res.json(todo);
		})
		.catch(next);
	},

	post(req,res,next)	{
		todo =	{
            text : req.body.text,
            done : false
        }
		ToDo.create(todo)
		.then(todo =>	{
			res.json(todo);
		})
		.catch(next);
	},
	delete(req,res,next)	{
		ToDo.remove({ _id: req.params.todo_id})
		.then(todo =>	{
			res.json({"status": true});
		})
		.catch(next);
	}
}
