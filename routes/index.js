var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'GetInfographics' });
});


/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('auth/login', { title: 'GetInfographics' });
});

module.exports = router;
