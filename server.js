//Dependencies and handles to them
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;

var app = express();

//Allow handlebars to access public folder, set up body parser middleware
app.use(express.static('./public'));

app.use(bodyParser.urlencoded({ extended: false }));

//Override with POSt having ?_method=DELETE
//Do we need this currently?  Maybe in future with comments etc
app.use(methodOverride('_method'));

//Set up Handlebars
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Import routes and give server access to them
var routes = require('./controllers/mainController.js');

app.use('/', routes);

app.listen(port);