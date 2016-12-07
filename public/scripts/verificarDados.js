
function verificarCadastro(nomePet,raza,nomePropietario,telPropietario)
{
	var filtro = /^([a-zA-Z\s])+$/;
	var filtro2 =  /^\d+$/;

	if(nomePet == "" || raza == "" || nomePropietario == "" || telPropietario.value == ""
		|| !filtro.test(nomePet) || !filtro.test(raza) || !filtro.test(nomePropietario) || !filtro2.test(telPropietario))
		return false;
	return true;
}

function verificarPedido(nomSolicitante,dirPedido)
{
	var filtro =/^([a-zA-Z\s])+$/;
	if(nomSolicitante == "" || dirPedido == "" || !filtro.test(nomSolicitante))
		return false;
	return true;
}
function verificarServicio(nomePet,nomPropietario,dirPedido)
{
	var filtro  = /^([a-zA-Z\s])+$/;

	if(nomePet == "" || nomPropietario == "" || dirPedido == "" 
		|| !filtro.test(nomePet) || !filtro.test(nomPropietario))
		return false;
	return true;	

}

module.exports.verificarCadastro = verificarCadastro;
module.exports.verificarPedido = verificarPedido;
module.exports.verificarServicio = verificarServicio;