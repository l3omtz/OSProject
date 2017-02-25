var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/landing');
var users = require('./routes/usersdb');

var app = express();
//View Engine
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname,'src')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/db', users);

app.listen(3000, function(){
  console.log('server started on port 3000')
});
