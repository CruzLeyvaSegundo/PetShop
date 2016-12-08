const express = require('express'),
	bodyParser = require('body-parser'),
	//path = require('path'),
	nodeCouchDb = require('node-couchdb'),
	verificar = require('./public/scripts/verificarDados.js');
	
const couch = new nodeCouchDb({
	auth:{
		user:'admin',
		password:'123456'
	}
});

couch.listDatabases().then(function(dbs){
	console.log(dbs);
});

const dbName='mascotas';
const viewUrl = '_design/all_mascotas/_view/allMascotas';

const app = express();

var verificarCadastro = verificar.verificarCadastro,
	verificarPedido = verificar.verificarPedido,
	verificarServicio = verificar.verificarServicio;

//app.set('view',path.join(__dirname,'views'));	
//app.engine('html', require('ejs').renderFile);
app.set('view engine','ejs');
//app.set('view engine','ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));

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

app.get('/adminCouchDB', function (req, res) {
	couch.get(dbName,viewUrl).then(
		function(data, headers, status){
			console.log(data.data.rows);
			res.render('adminDB',{
				mascotas: data.data.rows
			});
		},
		function(err){
			res.send(err);
		});
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
		couch.uniqid().then(function(ids){
			const id = ids[0];
			couch.insert(dbName,{
				_id: id,
				nomeMascota: nomeMascota,
				tipoMascota: tipoMascota,
				razaMascota: razaMascota,
				generoMascota: generoMascota,
				propietario: {
						nomePropietario: nomePropietario,
						telPropietario: telPropietario}
			}).then(
				function(data,headers,status){
					//res.redirect('/');
				},
				function(err){
					res.send(err);
				});
		});
		//Insersao dos donos
		couch.uniqid().then(function(ids){
			const id = ids[0];
			couch.insert(dbName,{
				_id: id,
				nomePropietario: nomePropietario,
				telPropietario: telPropietario
			}).then(
				function(data,headers,status){
					res.redirect('/');
				},
				function(err){
					res.send(err);
				});
		});
		console.log("registro completo!!!");
		//res.render('cadastro',{});
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

app.post('/adminCouchDB/delete/:id', function (req, res) {
	const id = req.params.id;
	const rev = req.body.rev;
	couch.del(dbName,id,rev).then(
		function(data, headers, status){
				res.redirect('/adminCouchDB');
		},
		function(err){
			res.send(err);
		});
});
app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);

module.exports = app ;

