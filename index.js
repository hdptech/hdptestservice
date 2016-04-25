var express = require('express');
var app = express();


app.get('/getDate', function (req, res) {
    res.send({'city' :  'My favourite city is ' + req.query.city});
});

app.listen(3001, '127.0.0.1');
