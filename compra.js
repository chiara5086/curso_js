// Clase EVENTOS

let cuadros = document.getElementsByClassName("cuadro");
let tazas = document.getElementsByClassName("taza");
let bols = document.getElementsByClassName("bol");

for (let i = 0; i < cuadros.length; i++) {
    let cuadro = document.getElementById(cuadros[i].id);
    cuadro.onclick = function() {
        muestra(cuadros[i].id);
    }
} 

for (let i = 0; i < tazas.length; i++) {
    let taza = document.getElementById(tazas[i].id);
    taza.onclick = function() {
        muestra(tazas[i].id);
    }
}

for (let i = 0; i < bols.length; i++) {
    let bol = document.getElementById(bols[i].id);
    bol.onclick = function() {
        muestra(bols[i].id);
    }
} 

function muestra(clicked_id) {
    alert("Se ha agregado un producto al carrito, lo puede ver reflejado arriba en la página")

    let pr = clicked_id.search("cuadro");
    let buscado;
    if (pr!=-1) buscado="cuadro";

    pr = clicked_id.search("taza");
    if (pr!=-1) buscado="taza";

    pr = clicked_id.search("bol");
    if (pr!=-1) buscado="bol";

    const prodElegido = productos.filter(prod => prod.nombre == buscado); 

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

const addNewTodoList = () =>{ 

    tableTodo.innerHTML = "";
    let tr;
    
    todoList.forEach((element,i) => {
        tr = document.createElement('tr');
        tr.setAttribute("id", i);
        if(element.status === 'Realizado')
            tr.setAttribute("class",'ready');

        tr.innerHTML = `<td>
                            <img src="img/${element.category}" alt="">
                        </td>
                        <td>${element.description}</td>
                        <td>${element.date}</td>
                        <td>${element.status}</td>
                        <td>
                            <img class="pointer" src="img/delete.png" onClick="deleteClick(${i})">
                            <img class="pointer" src="img/check.png" onClick="checkClick(${i})">
                        </td>`;

        tableTodo.appendChild(tr);
    });

   
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

let todoList = JSON.parse(localStorage.getItem("todoList")) || [];

if(todoList.length > 0) addNewTodoList();
