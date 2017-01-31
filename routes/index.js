var express = require('express');
var router = express.Router();
var log = require('client-logger')('testharness-application');
/* GET home page. */
router.get('/', function(req, res, next) {
  log.info('rendering application')
  res.render('index', { title: 'Express' });
});

module.exports = router;
