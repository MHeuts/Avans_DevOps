var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: process.env.MONGO_URL });
});

module.exports = router;
