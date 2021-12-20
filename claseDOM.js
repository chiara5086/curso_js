// Clase DOM

function muestra(clicked_id) {
    alert("Se ha agregado un producto al carrito, lo puede ver reflejado arriba en la página")
    const prodElegido = productos.filter(prod => prod.nombre == clicked_id); 

    let producto;
    prodElegido.forEach(p => producto=p)
    
    let subtot = document.getElementById("precioFinal").innerHTML;

    if (subtot==0){document.getElementById("precioFinal").innerHTML =  producto.sumaIva();} 
    
    else{let valor = parseInt(subtot)+ producto.sumaIva();

        document.getElementById("precioFinal").innerHTML = valor}
    let subc = document.getElementById(producto.id).innerHTML;
    document.getElementById(producto.id).innerHTML = parseInt(subc)+1;   
  }

  class Producto {
    constructor(id,nombre,precio) {
        this.nombre = nombre;
        this.precio = precio;
        this.id=id;
    }
    sumaIva() {
        let calculate =  this.precio * 1.21;
       return calculate
    }
}

const productos = [];
productos.push(new Producto(1,"cuadro", "3000"));
productos.push(new Producto(2,"taza", "1000"));
productos.push(new Producto(3,"bol", "600"));



let contenedor = document.createElement("div");

for (const producto of productos) {
    
    //Definimos el innerHTML del elemento con una plantilla de texto

    contenedor.innerHTML +=  `<p>Producto: ${producto.nombre} - Precio:<b> $${producto.precio}</b> -
                            Cantidad: <span id=${producto.id}>0</span></p>`;
                            
                            

}
document.getElementById("infoProd").innerHTML=(contenedor.innerHTML);
