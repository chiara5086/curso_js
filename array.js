// Clase Array

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

const productos = [];
productos.push(new Producto("cuadro", "3000"));
productos.push(new Producto("taza", "1000"));
productos.push(new Producto("bol", "600"));

let pre=0;
let productoIngresado = prompt("Ingrese el nombre del producto que desea comprar (cuadro, taza o bol) y le diremos su precio final.")

const prodElegido = productos.filter(prod => prod.nombre == productoIngresado); 
let producto;
prodElegido.forEach(p => producto=p)

document.getElementById("nombre").innerHTML = producto.nombre ;
pre=producto.sumaIva();
document.getElementById("precioFinal").innerHTML = pre;
console.log("El valor final del producto ("+producto.nombre+") es: $"+pre)
