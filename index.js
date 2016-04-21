var express = require('express');
var app = express();


app.get('/getDate', function (req, res) {
    res.send('hey hey hey:' + req.query.city);
});

app.listen(3001, '127.0.0.1');
