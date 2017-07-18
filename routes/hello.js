var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var color = process.env.COLOR;
  res.send(color + '\n');
});

module.exports = router;
