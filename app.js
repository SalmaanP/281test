var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();


var adminManagement = require('./routes/adminManagement');
require('./model/mongoconnect');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.get('/admin_dashboard', adminManagement.admin_dashboard); //done
app.get('/admin_activeUserManagement', adminManagement.admin_activeUserManagement); //done
app.get('/admin_activeHostManagement', adminManagement.admin_activeHostManagement); //done
app.get('/admin_activePropertyManagement', adminManagement.admin_activePropertyManagement); //done
app.get('/addNode', adminManagement.viewAddNodePage);
app.get('/addCluster', adminManagement.viewAddClusterPage);
app.get('/addService', adminManagement.viewAddServicePage);
app.get('/getNodes', adminManagement.getNodes);
app.get('/getClusters', adminManagement.getClusters);
app.get('/getServices', adminManagement.getServices);
app.post('/postNode', adminManagement.postNodes);
app.post('/postCluster', adminManagement.postCluster);
app.post('/postService', adminManagement.postService);



app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
