// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var getBetweenChars = function(str, lChar, fChar){
  if(fChar){
    var start = str.indexOf(fChar) + 1;
  } else {
    start - 0;
  }
  var res = str.slice(start, str.indexOf(lChar));
  return res;
}


app.get("/", function (req, res) {
  var result = {};
  
  result.ipaddress = getBetweenChars(req.get('x-forwarded-for'), ',');
  result.language = getBetweenChars(req.get('accept-language'), ',');
  result.software = getBetweenChars(req.get('user-agent'), ')', '(' );
  console.log(result.software);
  res.set('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify(result));
});


  




// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});