const user = require('../controller/user');
const path = require('path');

module.exports = (app) =>	{
	app.get('/', (req,res) =>	{
		res.sendFile(path.join(__dirname+'/../index.html'));
	});

	app.post('/login',user.login);

	app.get('/signup', (req,res) =>	{
		res.sendFile(path.join(__dirname+'/../signup.html'));
	});

	app.post('/signup',user.signup);
}
