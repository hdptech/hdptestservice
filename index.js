var express = require('express');
var app = express();


app.get('/getDate', function (req, res) {
    res.send({'city' :  'My favourite city is ' + req.query.city});
});

app.get('/getCaptcha', function (req, res) {
    res.send({'captcha' :  'Captcha path goes here'});
});

app.get('/withParam/:par/:more', function (req, res) {
    res.send({'param' : req.params.par, 'more' : req.params.more});
});

app.listen(3001, '127.0.0.1');
