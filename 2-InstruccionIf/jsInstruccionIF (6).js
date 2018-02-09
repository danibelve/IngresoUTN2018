function Mostrar()
{
//tomo la edad  

var edad = document.getElementById("edad").value;

if (edad >=13 && edad <= 17)
{
    alert("Usted es adolescente");
}
else if(edad >=18){
        alert("Usted es adulto.");
    }else{
        alert("Usted es un niño.");
    }       

}//FIN DE LA FUNCIÓN