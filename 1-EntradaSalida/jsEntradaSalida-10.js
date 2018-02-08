/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarDescuento()
{
    var sueldo = parseInt(document.getElementById("importe").value);
    
        var resultado = document.getElementById("resultado");
        var descuento = sueldo * 0.25;
    
        var sueldoConDescuento = sueldo - descuento;
    
        resultado.value =  sueldoConDescuento;
}
