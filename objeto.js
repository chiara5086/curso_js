// Objeto
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    sumaIva() {
        let calculate = this.precio = this.precio * 1.21;
       return calculate
    }
}

const cuadro = new Producto("cuadro", "3000");
const taza = new Producto("taza", "1000");
const bol = new Producto("bol", "600");

let pre=0;
let producto = prompt("Ingrese el nombre del producto que desea comprar (cuadro, taza o bol) y le diremos su precio final.")
switch (producto) {
    case "cuadro":
        document.getElementById("nombre").innerHTML = cuadro.nombre ;
         pre=cuadro.sumaIva();
        document.getElementById("precioFinal").innerHTML = pre;
        console.log("El valor final del producto("+producto+") es: $"+pre)
         break;
     case "taza":
        document.getElementById("nombre").innerHTML = taza.nombre ;
         pre=taza.sumaIva();
        document.getElementById("precioFinal").innerHTML = pre;
        console.log("El valor final del producto("+producto+") es: $"+pre)
         break;
    case "bol":
        document.getElementById("nombre").innerHTML = bol.nombre ;
         pre=bol.sumaIva();
        document.getElementById("precioFinal").innerHTML = pre;
        console.log("El valor final del producto("+producto+")es: $"+pre)
           break;     
    default:
        alert("no corresponde a ningún producto")
        break;
}

