var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Hello MGT-656! This is part 1 of HW2');
});

app.get('/nickname', function(request, response){
    response.send('ok nightingale');
});

app.listen(process.env.PORT || 4000);