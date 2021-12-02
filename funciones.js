//Funciones

let prod;
let numero = 0;
let ans;
let total = 0;

function calcularValor (numero, val) {
    let result = numero * val;
    return result;
}

function valorProd (producto) {
    switch (producto) {
        case "cuadros":
            return 3000;
         case "tazas":
            return 600;
        case "bowls":
            return 1000;
    }
}

do {
    prod = prompt("Si desea comprar cuadros ingrese 'c', si desea comprar tazas ingrese 't' y si desea comprar bowls ingrese 'b'")
    switch (prod) {
        case "c":
            prod="cuadros";
             break;
         case "t":
            prod="tazas";
             break;
        case "b":
               prod="bowls";
               break;     
        default:
            alert("La letra no corresponde a ningún producto")
            break;
    }
    numero = parseInt(prompt("¿Cuántos "+ prod +" desea comprar?"));
    total = total+(calcularValor(numero,valorProd(prod) ));
    alert ("El costo total es: $"+ total);
    ans = prompt("Si desea continuar con las compras ingrese sí"); 
} while (ans == "si");
alert ("Gracias por su compra!");