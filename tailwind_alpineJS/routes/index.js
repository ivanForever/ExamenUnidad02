var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/docs', function(req, res, next) {
  res.render('docs');
});
router.get('/screem', function(req, res, next) {
  res.render('screem');
});
router.get('/lop', function(req, res, next) {
  res.render('lop');
});
module.exports = router;
