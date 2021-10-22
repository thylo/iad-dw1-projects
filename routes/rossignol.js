var express = require('express');
var router = express.Router();

//https://custom-9911.frb.io/dioramas/fr/mudflats

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
