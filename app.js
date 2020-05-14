var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var assistantRouter = require('./routes/assistant');
var disabledRouter = require('./routes/disabled');
var demandRouter = require('./routes/demand');


var app = express();

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});

var session = require('express-session')
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');


app.use(session({
  secret: 'keyboard cat', // 相当于是一个加密密钥，值可以是任意字符串
  resave: false, // 强制session保存到session store中
  saveUninitialized: false // 强制没有“初始化”的session保存到storage中
  }))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

console.log(path.join(__dirname, 'public'))

app.use('/users', usersRouter);

app.use('*',(req,res,next)=>{
  if(!req.session.user){
    return res.redirect('/users')  //一定要加return 不然会报错
  }
  next();
})


app.use('/', indexRouter);

app.use('/assistant', assistantRouter);
app.use('/disabled', disabledRouter);
app.use('/demand', demandRouter);
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
