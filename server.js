//  OpenShift sample Node application
var http = require("http"),
	//fs      = require('fs'),
	express = require('express'),
    app     = express();

//var html = fs.readFileSync("views/index.html");
app.use(express.static('images'));
app.use(express.static('css'));
app.use(express.static('scripts'));
app.engine('html', require('ejs').renderFile);
app.set("view engine","html");
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
	
app.get('/', function (req, res) {
    res.render('index', {});
	//res.writeHead(200,{"Content-Type":"text/html"});
	//res.write(html);
});


app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);

module.exports = app ;

