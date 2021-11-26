//Ciclos

let prod;
let numero = 0;
let ans;
let val = 0;
let total = 0;
do{
    prod = prompt("Si desea comprar cuadros ingrese 'c', si desea comprar tazas ingrese 't' y si desea comprar bowls ingrese 'b'")
    switch (prod) {
        case "c":
            prod="cuadros";
            val=3000;
             break;
         case "t":
            prod="tazas";
            val=600;
             break;
        case "b":
               prod="bowls";
               val=1000;
               break;     
        default:
            alert("La letra no corresponde a ningún producto")
            break;
    }
    numero = parseInt(prompt("¿Cuántos "+ prod +" desea comprar?"));
    total = total+(numero * val)
    alert("El costo total es: $"+ total);
    ans = prompt("Si desea continuar con las compras ingrese sí"); 
}while(ans == "si");
alert("Gracias por su compra!")