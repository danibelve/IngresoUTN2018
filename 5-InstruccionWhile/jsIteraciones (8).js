function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var flag = 0;
	
	var respuesta;

	do {
		numero = parseInt(prompt('Ingresa el número:'));
		if(numero >= 0 ){
			positivo += numero;
		}else{
			negativo *= numero;
			flag = 1;
		}
		respuesta = prompt('¿seguir ingresando números? (si/no)');
		contador++;
	}while(respuesta == "si");

	if(flag == 0){
		negativo = 0;
	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN