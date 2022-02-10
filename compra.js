// Clase JQuery
class Producto {
    constructor(id, nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.id = id;
        this.cantidad = cantidad;
    }
    sumaIva() {
        let calculate = this.precio * 1.21;
        return calculate
    }
}

const productos = [];
productos.push(new Producto(1, "cuadro", "3000", 0));
productos.push(new Producto(2, "taza", "1000", 0));
productos.push(new Producto(3, "bol", "600", 0));




let cuadros = document.getElementsByClassName("cuadro");
let tazas = document.getElementsByClassName("taza");
let bols = document.getElementsByClassName("bol");

for (let i = 0; i < cuadros.length; i++) {
    let cuadro = document.getElementById(cuadros[i].id);
    cuadro.onclick = function () {
        muestra(cuadros[i].id);
    }
}

for (let i = 0; i < tazas.length; i++) {
    let taza = document.getElementById(tazas[i].id);
    taza.onclick = function () {
        muestra(tazas[i].id);
    }
}

for (let i = 0; i < bols.length; i++) {
    let bol = document.getElementById(bols[i].id);
    bol.onclick = function () {
        muestra(bols[i].id);
    }
}

function muestra(clicked_id) {
    alert("Se ha agregado el producto. Podés visualizar tu compra en el carrito de arriba a la derecha!")

    let pr = clicked_id.search("cuadro");
    let buscado;
    if (pr != -1) buscado = "cuadro";

    pr = clicked_id.search("taza");
    if (pr != -1) buscado = "taza";

    pr = clicked_id.search("bol");
    if (pr != -1) buscado = "bol";

    const prodElegido = productos.filter(prod => prod.nombre == buscado);

    let producto;

    addCompra(prodElegido);

    prodElegido.forEach(p => producto = p)
    
    let subtot=localStorage.getItem("compraValorIva");

    if(subtot == null ||subtot==0 ) {
         let sub= producto.sumaIva()
         localStorage.setItem("compraValorIva", sub);
        }
    else {
        let valor = parseInt(subtot) + producto.sumaIva();
        localStorage.setItem("compraValorIva", valor);
      
    }
}

const addCompra = (prodElegido) => {
    let producto;
    prodElegido.forEach(p => producto = p);
    let productos;
    localStorage.getItem('compraList') ?
        productos = JSON.parse(localStorage.getItem("compraList"))
        :
        productos = 0;

    if (productos == 0) {
        let id = producto.id;
        let nombre = producto.nombre;
        let precio = producto.precio;
        producto.cantidad = producto.cantidad + 1;
        let cantidad = producto.cantidad;
        let newCompra = new Producto(id, nombre, precio, cantidad);
        compraList.push(newCompra);
        localStorage.setItem("compraList", JSON.stringify(compraList));
    } else {
        let productos2;
        let index = productos.findIndex(item => item.id === producto.id);
        if (producto.cantidad > 0) {
            compraList.splice(index, 1);

            producto.cantidad = producto.cantidad + 1;
        } else {

            producto.cantidad = producto.cantidad + 1;
        }
        let newCompra = new Producto(producto.id, producto.nombre, producto.precio, producto.cantidad);
        compraList.push(newCompra);
        localStorage.setItem("compraList", JSON.stringify(compraList));
    }
}


let compraList = JSON.parse(localStorage.getItem("compraList")) || [];

