

const User = require('../models/user');

module.exports = 	{
	login(req,res,next)	{
		userData =	{
			"email": req.body.email,
			"password": req.body.password,
		}
		User.findOne({ "email":userData.email })
		.then(user =>	{
			res.send('Welcome '+user.firstName+' '+user.lastName);
		})
		.catch(next);
	},

	signup(req,res,next)	{
		user =	{
			"firstName": req.body.firstName,
			"lastName": req.body.lastName,
			"email": req.body.email,
			"mobile": req.body.mobile,
			"password":req.body.password
		}
		User.create(user)
		.then(user =>	{
			res.send('Welcome '+user.firstName+' '+user.lastName+'\nThank You!');
		})
		.catch(next);
	}
}
