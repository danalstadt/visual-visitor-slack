var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', function (req, res) {
    console.log(req.body);
});

app.listen(process.env.PORT ? process.env.PORT : 8081);