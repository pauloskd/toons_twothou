var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// CORS - (Cross-origin resource sharing) hantering
// referera lite längre ner till 'app.use' för att se implementering
var cors = require('cors');

var indexRouter = require('./routes/index');
var cartoonsRouter = require('./routes/cartoons');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Mongoose Initialisering -----------------------------------------
var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://kiduspaulos:kgYKmBaGS5VJ75e@cluster0.jte4y.mongodb.net/modul-1?retryWrites=true&w=majority');
app.use(express.static(path.join(__dirname, 'public')));
// CORS - (Cross-origin resource sharing) hantering
app.use(cors({
  origin: 'http://192.168.1.101:19006',
}));

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error. Det lyckades inte:'));
db.once('open', function(callback){
  console.log("Kopplingen lyckades!");
});

app.use('/', indexRouter);
app.use('/cartoons', cartoonsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
