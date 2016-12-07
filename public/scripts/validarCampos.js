
function validaCadastro()
{
	var nomePet = document.getElementById('nomeMascota');
	var raza = document.getElementById('razaMascota');
	var nomePropietario = document.getElementById('nomePropietario');
	var telPropietario = document.getElementById('telPropietario');
	var filtro = /^([a-zA-Z\s])+$/;
	var filtro2 =  /^\d+$/;

	/* Validação do campo nomePet */
	caixa_nome = document.querySelector('.msg-nomeMascota');
	if(nomePet.value == "")
	{
		caixa_nome.innerHTML = "Favor preencher o nome da mascota";
		caixa_nome.style.display = 'block';
	}
	else if(!filtro.test(nomePet.value))
	{
		caixa_nome.innerHTML = "Nao ingrese numeros ou caracteres especiais";
		caixa_nome.style.display = 'block';
	}
	else
		caixa_nome.style.display = 'none';

	// Validação do campo raza 
	caixa_raza = document.querySelector('.msg-razaMascota');
	if(raza.value == "")
	{
		caixa_raza.innerHTML = "Favor preencher o raça da mascota";
		caixa_raza.style.display = 'block';
	}
	else if(!filtro.test(raza.value))
	{
		caixa_raza.innerHTML = "Nao ingrese numeros ou caracteres especiais";
		caixa_raza.style.display = 'block';
	}
	else
		caixa_raza.style.display = 'none';
	
	// Validação do campo nomePropietario 
	caixa_nomePropietario = document.querySelector('.msg-nomePropietario');
	if(nomePropietario.value == "")
	{
		caixa_nomePropietario.innerHTML = "Favor preencher o nome do propietario";
		caixa_nomePropietario.style.display = 'block';
	}
	else if(!filtro.test(nomePropietario.value))
	{
		caixa_nomePropietario.innerHTML = "Nao ingrese numeros ou caracteres especiais";
		caixa_nomePropietario.style.display = 'block';
	}
	else
		caixa_nomePropietario.style.display = 'none';
	
	// Validação do campo telPropietario 
	caixa_telPropietario = document.querySelector('.msg-telPropietario');
	if(telPropietario.value == "")
	{
		caixa_telPropietario.innerHTML = "Favor preencher o telfono do contacto";
		caixa_telPropietario.style.display = 'block';
	}
	else if(!filtro2.test(telPropietario.value))
	{
		caixa_telPropietario.innerHTML = "Nao ingrese letras ou caracteres especiais";
		caixa_telPropietario.style.display = 'block';
	}
	else
		caixa_telPropietario.style.display = 'none';
}

function validaPedido()
{
	var nomSolicitante = document.getElementById('nomSolicitante');
	var dirPedido = document.getElementById('dirPedido');
	var filtro =/^([a-zA-Z\s])+$/;

	/* Validação do campo nomeSolicitante */
	caixa_nomSolicitante = document.querySelector('.msg-nomSolicitante');
	if(nomSolicitante.value == "")
	{
		caixa_nomSolicitante.innerHTML = "Favor preencher o nome do cliente";
		caixa_nomSolicitante.style.display = 'block';
	}
	else if(!filtro.test(nomSolicitante.value))
	{
		caixa_nomSolicitante.innerHTML = "Nao ingrese numeros ou caracteres especiais";
		caixa_nomSolicitante.style.display = 'block';
	}
	else
		caixa_nomSolicitante.style.display = 'none';
	
	// Validação do campo dirPedido 
	caixa_dirPedido = document.querySelector('.msg-dirPedido');
	if(dirPedido.value == "")
	{
		caixa_dirPedido.innerHTML = "Favor preencher endereço do cliente";
		caixa_dirPedido.style.display = 'block';
	}
	else
		caixa_dirPedido.style.display = 'none';
}
function validaServicio()
{
	var nomePet = document.getElementById('nomMascota');
	var nomPropietario = document.getElementById('nomPropietario');
	var dirPedido = document.getElementById('dirPedido');
	var filtro = /^([a-zA-Z\s])+$/;

	// Validação do campo nomePet 
	caixa_nomMascota = document.querySelector('.msg-nomMascota');
	if(nomePet.value == "")
	{
		caixa_nomMascota.innerHTML = "Favor preencher o nome da mascota";
		caixa_nomMascota.style.display = 'block';
	}
	else if(!filtro.test(nomePet.value))
	{
		caixa_nomMascota.innerHTML = "Nao ingrese numeros ou caracteres especiais";
		caixa_nomMascota.style.display = 'block';
	}
	else
		caixa_nomMascota.style.display = 'none';

	/* Validação do campo nomePet */
	caixa_nomPropietario = document.querySelector('.msg-nomPropietario');
	if(nomPropietario.value == "")
	{
		caixa_nomPropietario.innerHTML = "Favor preencher o nome do cliente";
		caixa_nomPropietario.style.display = 'block';
	}
	else if(!filtro.test(nomPropietario.value))
	{
		caixa_nomPropietario.innerHTML = "Nao ingrese numeros ou caracteres especiais";
		caixa_nomPropietario.style.display = 'block';
	}
	else
		caixa_nomPropietario.style.display = 'none';

	// Validação do campo dirPedido 
	caixa_dirPedido = document.querySelector('.msg-dirPedido');
	if(dirPedido.value == "")
	{
		caixa_dirPedido.innerHTML = "Favor preencher endereço do cliente";
		caixa_dirPedido.style.display = 'block';
	}
	else
		caixa_dirPedido.style.display = 'none';
	
	//if(error==0)
		//document.getElementById("form").reset();
}