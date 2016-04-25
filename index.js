var express = require('express');
var app = express();


app.get('/getDate', function (req, res) {
    console.log('getDate function');
    res.send({'city' :  'My favourite city is ' + req.query.city});
});

app.get('/getCaptcha', function (req, res) {
    console.log('getCaptcha function');
    res.send({'captcha' :  'Captcha path goes here'});
});

app.get('/withParam/:par/:more', function (req, res) {
    console.log('withParam function');
    res.send({'param' : req.params.par, 'more' : req.params.more});
});

var port;

if (typeof process.argv[2] !== 'undefined') {
    port = process.argv[2];
} else {
    port = '3001';
}

console.log(port);

app.listen(port, '127.0.0.1');
