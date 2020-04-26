const express = require('express');
const router = express.Router();


/* GET users listing. */




router.get('/', function(req, res, next) {
  res.render('ligerui/index');
});

router.get('/disabled', function(req, res, next) {
  res.render('ligerui/disabled');
});


module.exports = router;
