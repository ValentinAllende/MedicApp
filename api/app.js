var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./src/routes/index');
const  mongoose = require( "mongoose");

mongoose.connect("mongodb+srv://esteban:12345@mediapp.yasrnqu.mongodb.net/test")
.then(db => console.log("DB is connected"))
.catch(error => console.log(error));

// var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// app.use('/users', usersRouter);

// app.set('port', process.env.PORT || 3004)

// app.listen(app.get('port'), () => {
//   console.log(`Express server listening on port ${app.get('port')}`);
// })

module.exports = app;
