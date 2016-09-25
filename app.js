var express          = require('express'),
	path             = require('path'),
	favicon          = require('static-favicon'),
	logger           = require('morgan'),
	cookieParser     = require('cookie-parser'),
	bodyParser       = require('body-parser'),
	session          = require('express-session'),
	load    		 = require('express-load'),
	mongoose	     = require('mongoose'),
	flash		     = require('express-flash'),
	momento		     = require('moment'),
	expressValidator = require('express-validator');

//conexão com o banco de dados (mongodb)
mongoose.connect('mongodb://igorricardo20:igorW@1234@ds041546.mlab.com:41546/testeonline', function(err){
	if(err){
		console.log("Erro ao conectar no mongodb: "+err);
	}else{
		console.log("Conexão com o mongodb bem sucedida!");
	}

});


var app = express();

//middleware
var erros = require('./middleware/erros');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(expressValidator());
app.use(cookieParser());
app.use(session({secret: 'chave-secreta'}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(flash());




//helpers
app.use(function(req,res,next){
	res.locals.momento = momento;
	next();

});



load('models').then('controllers').then('routes').into(app);



app.listen(5000, function() {
    console.log('Express server listening on port 5000');
});
