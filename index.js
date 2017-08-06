var express = require('express');
var path = require('path');

var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

var pieRouter = require('./routes/pie')
app.use('/pie',pieRouter)

//app.set('port', 9080);
var server = app.listen(process.env.PORT || 9080, function() {
  console.log('Express server listening on port ' + server.address().port);
});
module.exports = app;