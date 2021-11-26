// Condicionales
// &&
// ||


let edad = prompt("Introducí tu edad");

if (edad >= 1 && edad <= 17) {
    alert("Usted es menor de edad");
} 
else if (edad >= 18 && edad <= 39) {
    alert("Usted es una persona joven adulta");
} 
else if (edad >= 40 && edad <= 64) {
    alert("Usted es una persona adulta");
} 
else if (edad >= 64) {
    alert("Usted es una persona que pertenece al grupo de adultos mayores");
}
else if (edad == null || edad == ""){
    alert("Has cancelado o introducido tu edad vacía");
}

//Operadores de orden

let n1 = prompt("Escribí un número");
let n2 = prompt("Escribí otro número");

if (n1 > n2) {
    alert("El número mayor es: "+n1);
}
else {
    if (n1 == n2)  alert("Los números son iguales"); 
}

//Operadores lógicos

let opcion = prompt ("Introducí tu nombre");

if (opcion == null || opcion == "") {
    alert("Has cancelado o introducido el nombre vacío");
} else {
    alert("Hola " + opcion);
}