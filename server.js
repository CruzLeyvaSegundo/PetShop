var express = require('express'),
    app     = express();

app.use(express.static('images'));
app.use(express.static('css'));
app.use(express.static('scripts'));

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


app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);

module.exports = app ;

