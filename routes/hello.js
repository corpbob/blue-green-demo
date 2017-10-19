var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("test2");
  var color = process.env.COLOR;
  res.send('version 3: ' + color + '\n');
});

module.exports = router;
