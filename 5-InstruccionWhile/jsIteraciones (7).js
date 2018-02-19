function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	var respuesta="si";
	var promedio;

	while(respuesta == "si") {
		numero = parseInt(prompt('Ingresa el número'));
		respuesta = prompt('¿seguir ingresando números?');
		acumulador += numero;
		contador++;
	}

	promedio = acumulador/contador;

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN