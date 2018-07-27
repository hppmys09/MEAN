
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
	}
}
