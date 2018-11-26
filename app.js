var express = require('express');
//npm install express --save
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(process.env.port || 3000 , function () {
  console.log('Example app listening on port 3000!');
});
