/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostrar()
{	
    var name = document.getElementById("elNombre").value;
    var age = document.getElementById("laEdad").value;
    alert("Usted se llama " + name + " y tiene " + age +" años.");
}

