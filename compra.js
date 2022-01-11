// Clase JQuery

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
    alert("Se ha agregado un producto al carrito, lo puede ver reflejado arriba en la página")

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

    let subtot = document.getElementById("precioFinal").innerHTML;

    if (subtot == 0) { document.getElementById("precioFinal").innerHTML = producto.sumaIva(); }

    else {
        let valor = parseInt(subtot) + producto.sumaIva();

        document.getElementById("precioFinal").innerHTML = valor
    }

}

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
        addNewCompraList();
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
        addNewCompraList();
    }





}


const addNewCompraList = () =>{ 
    $("#tableCompra").html("");
    compraList.forEach((element,i) => {

    $("#tableCompra").append(`<tr id="${i}"><td>
                            <img src="img/shopping.png" alt="">
                            </td>
                            <td>${element.nombre}</td>
                            <td>${element.precio}</td>
                            <td id=${element.nombre + element.id} >${element.cantidad}</td>
                            <td>
                            <img class="pointer" src="img/delete.png" >

                            </td></tr>`);                         
})
}

$(document).on('click','.pointer', function(){
    
    var trId = $(this).closest('tr').attr('id'); // table row ID 
    let prod = compraList.splice(trId, 1);
    const prodElegido = productos.filter(p => p.nombre == prod[0].nombre);
    let producto;
    prodElegido.forEach(p => producto = p);
    let subtot = document.getElementById("precioFinal").innerHTML;
    let valor = parseInt(prod[0].cantidad) * producto.sumaIva();
    document.getElementById("precioFinal").innerHTML = subtot - (valor);
    producto.cantidad = 0;
    localStorage.setItem("compraList", JSON.stringify(compraList));
    addNewCompraList();

 });


let compraList = JSON.parse(localStorage.getItem("compraList")) || [];

if (compraList.length > 0) addNewCompraList();
