var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('main', { title: 'ejs테스트' });
});

module.exports = router;
