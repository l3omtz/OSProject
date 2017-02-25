var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://admin:admin@ds155428.mlab.com:55428/tiktalk2go',['users']);


router.get('/usersdb', function(req, res, next){
  db.users.find(function(err, users){
    if (err){
      // res.send(err);
      console.log('err');
    }else{
      res.json(users);
    }
  });
});

module.exports = router
