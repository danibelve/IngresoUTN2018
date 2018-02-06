/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

function sumar()
{	
    var num1 = parseInt(document.getElementById("numeroUno").value);
    var num2 = parseInt(document.getElementById("numeroDos").value);
    var suma = num1 + num2;
    alert("La suma es: " + suma);
}

function restar()
{
    var num1 = parseInt(document.getElementById("numeroUno").value);
    var num2 = parseInt(document.getElementById("numeroDos").value);
	var resta = num1 - num2;
    alert("La resta es: " + resta);
}

function multiplicar()
{ 
    var num1 = parseInt(document.getElementById("numeroUno").value);
    var num2 = parseInt(document.getElementById("numeroDos").value);
	var multiplica  = num1 * num2;
    alert("La multiplicación es: " + multiplica);
}

function dividir()
{
    var num1 = parseInt(document.getElementById("numeroUno").value);
    var num2 = parseInt(document.getElementById("numeroDos").value);
	var divido = num1/num2;
    alert("La división es: " + divido);
}

