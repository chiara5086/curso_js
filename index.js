// Condicionales
// &&
// ||


let edad = prompt("Introducí tu edad, para saber si tenés un descuento en nuestra tienda");

if (edad < 18) {
    alert("Lo sentimos, no podemos darte un descuento");
} 
else if (edad > 18 && edad < 25) {
    alert("Felicitaciones, tenés un descuento del 10%!");
}
else if (edad > 25) {
    alert("Lo sentimos, pero no tenés descuento")
}
else if (edad == 18 || edad == 25) {
    alert("Felicitaciones, tenés un descuento especial del 20%!");
} 
else if (edad == null || edad == ""){
    alert("Has cancelado o introducido tu edad vacía");
}

//Operadores lógicos

let opcion = prompt ("Introducí tu nombre");

if (opcion == null || opcion == "") {
    alert("Has cancelado o introducido el nombre vacío");
} else {
    alert("Hola " + opcion);
}