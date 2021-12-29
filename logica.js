const addCompra = (prodElegido) =>{
    prodElegido.forEach(p => producto=p)

    let id = producto.id;
    let nombre = producto.nombre;
    let precio = producto.precio;
    let cantidad = producto.cantidad;
    let newCompra = new Producto(id, nombre,precio,cantidad);
    compraList.push(newCompra);
    localStorage.setItem("compraList",JSON.stringify(compraList));

    addNewCompraList(compraList);


}


const addNewCompraList = (compraList) =>{ 

    tableCompra.innerHTML = "";
    let tr;
    
    compraList.forEach((element,i) => {
        tr = document.createElement('tr');
        tr.setAttribute("id", i);
        
        tr.innerHTML = `<td>
                            <img src="img/shopping.png" alt="">
                        </td>
                        <td>${element.nombre}</td>
                        <td>${element.precio}</td>
                        <td id=${element.id} >${element.cantidad}</td>
                        <td>
                            <img class="pointer" src="img/delete.png" onClick="deleteClick(${i})">

                        </td>`;

        tableCompra.appendChild(tr);
    });

   
}

