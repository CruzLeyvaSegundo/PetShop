
function verificarCadastro(nomePet,raza,nomePropietario,telPropietario)
{
	var filtro = /^([a-zA-Z\s])+$/;
	var filtro2 =  /^\d+$/;
	var span={span1:null,span2:null,span3:null,span4:null};
	
	if(nomePet == "")
		span.span1="Favor preencher o nome da mascota";
	else if(!filtro.test(nomePet))
		span.span1="Nao ingrese numeros ou caracteres especiais";
	
	if(raza == "")
		span.span2="Favor preencher o raça da mascota";
	else if(!filtro.test(raza))
		span.span2="Nao ingrese numeros ou caracteres especiais";
	
	if(nomePropietario == "")
		span.span3="Favor preencher o nome do propietario";
	else if(!filtro.test(nomePropietario))
		span.span3="Nao ingrese numeros ou caracteres especiais";
	
	if(telPropietario == "")
		span.span4="Favor preencher o telefono do contacto";
	else if(!filtro2.test(telPropietario))
		span.span4="Nao ingrese letras ou caracteres especiais";

	if(span.span1!=null||span.span2!=null||span.span3!=null||span.span4!=null)
		return span;
	return null;
}

function verificarPedido(nomSolicitante,dirPedido)
{
	var filtro =/^([a-zA-Z\s])+$/;
	var span={span1:null,span2:null};
	
	if(nomSolicitante == "" )
		span.span1="Favor preencher o nome do cliente";
	else if(!filtro.test(nomSolicitante))
		span.span1="Nao ingrese numeros ou caracteres especiais";
	
	if(dirPedido == "" )
		span.span2="Favor preencher endereço do cliente";
	
	if(span.span1!=null||span.span2!=null)
		return span;
	return null;
}
function verificarServicio(nomePet,nomPropietario,dirPedido)
{
	var filtro  = /^([a-zA-Z\s])+$/;
	var span={span1:null,span2:null,span3:null};	
	
	if(nomePet == "")
		span.span1="Favor preencher o nome da mascota";
	else if(!filtro.test(nomePet))
		span.span1="Nao ingrese numeros ou caracteres especiais";
	
	if(nomPropietario == "")
		span.span2="Favor preencher o nome do cliente";
	else if(!filtro.test(nomPropietario))
		span.span2="Nao ingrese numeros ou caracteres especiais";

	if(dirPedido == "")
		span.span3="Favor preencher endereço do cliente";	
		
	if(span.span1!=null||span.span2!=null||span.span3!=null)
		return span;
	return null;
}

module.exports.verificarCadastro = verificarCadastro;
module.exports.verificarPedido = verificarPedido;
module.exports.verificarServicio = verificarServicio;