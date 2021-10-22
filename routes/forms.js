const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('forms/index', { title: 'Forms' });
});

module.exports = router;
