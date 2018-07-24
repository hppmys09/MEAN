

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.get('/', (req,res) =>	{
	res.sendFile(path.join(__dirname+'/index.html'));
});

app.post('/',(req,res) =>	{
	let email = req.body.email;
	let password = req.body.password;
	console.log(email);
	res.send('Welcome '+email);
});



const ip = '127.0.0.1';

app.listen(3000,ip, () =>	{
	console.log('Server listening at '+ip+':3000');
});