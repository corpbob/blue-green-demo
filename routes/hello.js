var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("test1");
  var color = process.env.COLOR;
  res.send(color + '\n');
});

module.exports = router;
