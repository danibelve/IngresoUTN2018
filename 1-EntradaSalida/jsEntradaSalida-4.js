/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostrar()
{
	var dato = prompt("Ingrese su nombre");

	var input =	document.getElementById("elNombre")
	
	input.value = dato;


}

