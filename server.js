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

const viewMascotasUrl = '_design/all_mascotas/_view/allMascotas';
const viewPropietariosUrl = '_design/all_propietarios/_view/allPropietarios';
const viewProdutosUrl = '_design/all_productos/_view/allProductos';
const viewServiciosUrl = '_design/all_servicios/_view/allServicios';


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

app.get('/Cadastro', function (req, res) {
    res.render('cadastro', {});
});

app.get('/Produtos', function (req, res) {
    res.render('productos', {});
});

app.get('/Servicios', function (req, res) {
    res.render('servicios', {});
});

app.get('/adminCouchDB', function (req, res) {
	res.render('adminDB',{tabela:'Tabela',etiqueta:['item1','item2','item3'],aux:null,
							data:[]});
});
app.get('/adminCouchDB/Mascotas', function (req, res) {
	couch.get(dbName,viewMascotasUrl).then(
		function(data, headers, status){
			console.log(data.data.rows);
			res.render('adminDB',{
				tabela: 'Pets',
				etiqueta: ['nomeMascota','tipoMascota','razaMascota','generoMascota','nomePropietario','telPropietario'],
				aux:'propietario',
				dir: 'Mascotas',
				data: data.data.rows
			});
		},
		function(err){
			res.send(err);
		});
	//console.log(dataMascota);
});
app.get('/adminCouchDB/Donos', function (req, res) {
	couch.get(dbName,viewPropietariosUrl).then(
		function(data, headers, status){
			console.log(data.data.rows);
			res.render('adminDB',{
				tabela: 'Donos',
				etiqueta: ['nomePropietario','telPropietario'],
				aux: null,
				dir: 'Donos',
				data: data.data.rows
			});
		},
		function(err){
			res.send(err);
		});
	//console.log(dataMascota);
});
app.get('/adminCouchDB/Produtos', function (req, res) {
	couch.get(dbName,viewProdutosUrl).then(
		function(data, headers, status){
			console.log(data.data.rows);
			res.render('adminDB',{
				tabela: 'Produtos pedidos',
				etiqueta: ['item','precio','nomSolicitante','dirPedido'],
				aux: null,
				dir: 'Produtos',
				data: data.data.rows
			});
		},
		function(err){
			res.send(err);
		});
	//console.log(dataMascota);
});
app.get('/adminCouchDB/Servicios', function (req, res) {
	couch.get(dbName,viewServiciosUrl).then(
		function(data, headers, status){
			console.log(data.data.rows);
			res.render('adminDB',{
				tabela: 'Servicios solicitados',
				etiqueta: ['item','precio','nomMascota','nomPropietario','dirPedido'],
				aux: null,
				dir: 'Servicios',
				data: data.data.rows
			});
		},
		function(err){
			res.send(err);
		});
	//console.log(dataMascota);
});

app.post('/Cadastro', function (req, res) {
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
		console.log("Entreeeeee!!!");
		// Insersao das mascotas
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
					res.redirect('/Cadastro');
				},
				function(err){
					res.send(err);
				});
		});

		console.log("registro completo!!!");
	}
	else
		console.log("Error?!!!");
	//res.render('cadastro',{});
});
app.post('/Produtos', function (req, res) {
	var item = req.body.item,
		precio = '20',
		nomSolicitante = req.body.nomSolicitante,
		dirPedido	= req.body.dirPedido;
	console.log("item :" + item);
	console.log("precio :" + precio);
	console.log("nomSolicitante :" + nomSolicitante);
	console.log("dirPedido :" + dirPedido);
	if(verificarPedido(nomSolicitante,dirPedido))
	{
		couch.uniqid().then(function(ids){
		const id = ids[0];
		couch.insert(dbName,{
			_id: id,
			item: item,
			precio: precio,
			nomSolicitante: nomSolicitante,
			dirPedido: dirPedido
			}).then(
				function(data,headers,status){
					res.redirect('/Produtos');
				},
				function(err){
					res.send(err);
				});
		});
		console.log("registro completo!!!");
		//res.render('productos',{});
	}
});

app.post('/Servicios', function (req, res) {
	var item = req.body.item,
		precio = '20',
		nomMascota = req.body.nomMascota,
		nomPropietario	= req.body.nomPropietario,
		dirPedido = req.body.dirPedido;
	console.log("item :" + item);
	console.log("precio :" + precio);
	console.log("nomMascota :" + nomMascota);
	console.log("nomPropietario :" + nomPropietario);
	console.log("dirPedido :" + dirPedido);
	if(verificarServicio(nomMascota,nomPropietario,dirPedido))
	{
		couch.uniqid().then(function(ids){
		const id = ids[0];
		couch.insert(dbName,{
			_id: id,
			item: item,
			precio: precio,
			nomMascota: nomMascota,
			nomPropietario: nomPropietario,
			dirPedido: dirPedido
			}).then(
				function(data,headers,status){
					res.redirect('/Servicios');
				},
				function(err){
					res.send(err);
				});
		});
		console.log("registro completo!!!");
		//res.render('servicios',{});
	}
});
app.post('/adminCouchDB', function (req, res) {
	res.redirect('/adminCouchDB');
});
app.post('/adminCouchDB/:dir/delete/:id', function (req, res) {
	const dir = req.params.dir;
	const id = req.params.id;
	const rev = req.body.rev;
	couch.del(dbName,id,rev).then(
		function(data, headers, status){
				res.redirect('/adminCouchDB/'+dir);
		},
		function(err){
			res.send(err);
		});
});

app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);

module.exports = app ;

