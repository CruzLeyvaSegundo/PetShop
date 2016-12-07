var express = require('express'),
	bodyParser = require('body-parser'),
    app     = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('public'));

app.engine('html', require('ejs').renderFile);
app.set("view engine","html");

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
	
app.get('/', function (req, res) {
    res.render('index', {});
});

app.get('/cadastro', function (req, res) {
    res.render('cadastro', {});
});

app.get('/produtos', function (req, res) {
    res.render('productos', {});
});

app.get('/servicios', function (req, res) {
    res.render('servicios', {});
});

app.post('/', function (req, res) {
	if(false)
	{
		res.render('index', {});
	}
});

app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);

module.exports = app ;

