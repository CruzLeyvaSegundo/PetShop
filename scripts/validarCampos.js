
function validaCadastro()
{
	var nomePet = document.getElementById('nome');
	var raza = document.getElementById('raza');
	var nomePropietario = document.getElementById('nomePropietario');
	var telPropietario = document.getElementById('telPropietario');
	var filtro = /^([a-zA-Z\s]|ç)+$/;
	var filtro2 =  /^\d+$/;
	var error=0;
	/* Validação do campo nomePet */
	caixa_nome = document.querySelector('.msg-nome');
	if(nomePet.value == "")
	{
		caixa_nome.innerHTML = "Favor preencher o nome da mascota";
		caixa_nome.style.display = 'block';
		error++;
	}
	else if(!filtro.test(nomePet.value))
	{
		caixa_nome.innerHTML = "Nao ingrese numeros";
		caixa_nome.style.display = 'block';
		error++;
	}
	else
	{
		caixa_nome.style.display = 'none';
	}

	// Validação do campo raza 
	caixa_raza = document.querySelector('.msg-raza');
	if(raza.value == "")
	{
		caixa_raza.innerHTML = "Favor preencher o raça da mascota";
		caixa_raza.style.display = 'block';
		error++;
	}
	else if(!filtro.test(raza.value))
	{
		caixa_raza.innerHTML = "Nao ingrese numeros";
		caixa_raza.style.display = 'block';
		error++;
	}
	else
	{
		caixa_raza.style.display = 'none';
	}
	
	// Validação do campo nomePropietario 
	caixa_nomePropietario = document.querySelector('.msg-nomePropietario');
	if(nomePropietario.value == "")
	{
		caixa_nomePropietario.innerHTML = "Favor preencher o nome do propietario";
		caixa_nomePropietario.style.display = 'block';
		error++;
	}
	else if(!filtro.test(nomePropietario.value))
	{
		caixa_nomePropietario.innerHTML = "Nao ingrese numeros";
		caixa_nomePropietario.style.display = 'block';
		error++;
	}
	else
	{
		caixa_nomePropietario.style.display = 'none';
	}
	
	// Validação do campo telPropietario 
	caixa_telPropietario = document.querySelector('.msg-telPropietario');
	if(telPropietario.value == "")
	{
		caixa_telPropietario.innerHTML = "Favor preencher o telfono do contacto";
		caixa_telPropietario.style.display = 'block';
		error++;
	}
	else if(!filtro2.test(telPropietario.value))
	{
		caixa_telPropietario.innerHTML = "Nao ingrese letras";
		caixa_telPropietario.style.display = 'block';
		error++;
	}
	else
	{
		caixa_telPropietario.style.display = 'none';
	}
	if(error==0)
		document.getElementById("form").reset();
}
function validaPedido()
{
	var nomSolicitante = document.getElementById('nomSolicitante');
	var dirPedido = document.getElementById('dirPedido');
	var filtro =/^([a-zA-Z\s]|ç)+$/;
	var error=0;
	/* Validação do campo nomeSolicitante */
	caixa_nomSolicitante = document.querySelector('.msg-nomSolicitante');
	if(nomSolicitante.value == "")
	{
		caixa_nomSolicitante.innerHTML = "Favor preencher o nome do cliente";
		caixa_nomSolicitante.style.display = 'block';
		error++;
	}
	else if(!filtro.test(nomSolicitante.value))
	{
		caixa_nomSolicitante.innerHTML = "Nao ingrese numeros";
		caixa_nomSolicitante.style.display = 'block';
		error++;
	}
	else
	{
		caixa_nomSolicitante.style.display = 'none';
	}
	// Validação do campo dirPedido 
	caixa_dirPedido = document.querySelector('.msg-dirPedido');
	if(dirPedido.value == "")
	{
		caixa_dirPedido.innerHTML = "Favor preencher endereço do cliente";
		caixa_dirPedido.style.display = 'block';
		error++;
	}
	else
	{
		caixa_dirPedido.style.display = 'none';
	}
	if(error==0)
		document.getElementById("form").reset();
}
function validaServicio()
{
	var nomePet = document.getElementById('nomMascota');
	var nomPropietario = document.getElementById('nomPropietario');
	var dirPedido = document.getElementById('dirPedido');
	var filtro = /^([a-zA-Z\s]|ç)+$/;
	var error=0;
	// Validação do campo nomePet 
	caixa_nomMascota = document.querySelector('.msg-nomMascota');
	if(nomePet.value == "")
	{
		caixa_nomMascota.innerHTML = "Favor preencher o nome da mascota";
		caixa_nomMascota.style.display = 'block';
		error++;
	}
	else if(!filtro.test(nomePet.value))
	{
		caixa_nomMascota.innerHTML = "Nao ingrese numeros";
		caixa_nomMascota.style.display = 'block';
		error++;
	}
	else
	{
		caixa_nomMascota.style.display = 'none';
	}

	/* Validação do campo nomePet */
	caixa_nomPropietario = document.querySelector('.msg-nomPropietario');
	if(nomPropietario.value == "")
	{
		caixa_nomPropietario.innerHTML = "Favor preencher o nome do cliente";
		caixa_nomPropietario.style.display = 'block';
		error++;
	}
	else if(!filtro.test(nomPropietario.value))
	{
		caixa_nomPropietario.innerHTML = "Nao ingrese numeros";
		caixa_nomPropietario.style.display = 'block';
		error++;
	}
	else
	{
		caixa_nomPropietario.style.display = 'none';
	}
	// Validação do campo dirPedido 
	caixa_dirPedido = document.querySelector('.msg-dirPedido');
	if(dirPedido.value == "")
	{
		caixa_dirPedido.innerHTML = "Favor preencher endereço do cliente";
		caixa_dirPedido.style.display = 'block';
		error++;
	}
	else
	{
		caixa_dirPedido.style.display = 'none';
	}
	if(error==0)
		document.getElementById("form").reset();
}