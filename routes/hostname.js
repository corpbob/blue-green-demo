var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("test2");
  var hostname= process.env.HOSTNAME;
  var the_response = { "hostname": hostname};
  console.log("the response: ", the_response);
  res.send(JSON.stringify(the_response));
});

module.exports = router;
