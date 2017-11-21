// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();



app.get("/", function (req, res) {
  var result = {};
  result.ipaddress = req.connection.remoteAdress;
  res.set('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify(result));
});


  




// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});