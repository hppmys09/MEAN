const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const routes = require('./routes/routes');

mongoose.Promise = global.Promise;

const app = express();

mongoose.connect('mongodb://localhost:27017/user',{ useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

routes(app);

app.use((err,req,res,next) =>	{
	res.status(422).send({ status: false, error: err.message });
});

const ip = '127.0.0.1';

app.listen(3000,ip, () =>	{
	console.log('Server listening at '+ip+':3000');
});