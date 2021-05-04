var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("test2");
  var color = process.env.COLOR;
  var the_response = { "color": color };
  console.log("the response: ", the_response);
  //res.send('version 7: ' + color + '\n');
  res.send(JSON.stringify(the_response));
});

module.exports = router;
