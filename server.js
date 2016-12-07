var express = require("express"),
	bodyParser = require("body-parser"),
	verificar = require("./public/scripts/verificarDados.js"),
    app     = express();

var verificarCadastro = verificar.verificarCadastro,
	verificarPedido = verificar.verificarPedido,
	verificarServicio = verificar.verificarServicio;
app.use(bodyParser.urlencoded({extended: true}));
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

app.post('/cadastro', function (req, res) {
	var nomeMascota = req.body.nomeMascota,
		tipoMascota	= req.body.tipoMascota,
		razaMascota	= req.body.razaMascota,
		generoMascota = req.body.generoMascota,
		nomePropietario	= req.body.nomePropietario,
		telPropietario	= req.body.telPropietario;
	console.log("nombreMascota :" + nomeMascota);
	console.log("tipoMascota :" + tipoMascota);
	console.log("razaMascota :" + razaMascota);
	console.log("generoMascota :" + generoMascota);
	console.log("nomePropietario :" + nomePropietario);
	console.log("telPropietario :" + telPropietario);	
	if(verificarCadastro(nomeMascota,razaMascota,nomePropietario,telPropietario))
	{
		console.log("registro completo!!!");
		res.render('cadastro',{});
	}
	else
		console.log("Error?!!!");
});
app.post('/productos', function (req, res) {
	var nomSolicitante = req.body.nomSolicitante,
		dirPedido	= req.body.dirPedido;
	console.log("nomSolicitante :" + nomSolicitante);
	console.log("dirPedido :" + dirPedido);
	if(verificarPedido(nomSolicitante,dirPedido))
	{
		console.log("registro completo!!!");
		res.render('productos',{});
	}
});

app.post('/servicios', function (req, res) {
	var nomMascota = req.body.nomMascota,
		nomPropietario	= req.body.nomPropietario,
		dirPedido = req.body.dirPedido;
	console.log("nomMascota :" + nomMascota);
	console.log("nomPropietario :" + nomPropietario);
	console.log("dirPedido :" + dirPedido);
	if(verificarServicio(nomMascota,nomPropietario,dirPedido))
	{
		console.log("registro completo!!!");
		res.render('servicios',{});
	}
});
app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);

module.exports = app ;

