function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	var respuesta;
	var promedio;

	do {
		numero = parseInt(prompt('Ingresa el número:'));
		respuesta = prompt('¿seguir ingresando números? (si/no)');
		acumulador += numero;
		contador++;
	}while(respuesta == "si");

	promedio = acumulador/contador;

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN