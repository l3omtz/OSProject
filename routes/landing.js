var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
  res.render('landing.html');
});

module.exports = router;
