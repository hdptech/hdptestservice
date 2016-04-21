var express = require('express');
var app = express();


app.get('/heyheyhey', function (req, res) {
    res.send('hey hey hey');
});

app.listen(3001, '127.0.0.1');
