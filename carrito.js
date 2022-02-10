
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
let sub=localStorage.getItem('compraValorIva');
document.getElementById("precioFinal").innerHTML =sub ;


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
    localStorage.setItem("compraValorIva",  subtot - (valor));
    producto.cantidad = 0;
    localStorage.setItem("compraList", JSON.stringify(compraList));
    addNewCompraList();

 });
 $('#btnFinalizarCompra').click(function(){
    let sub=localStorage.getItem('compraValorIva');
     if (sub>0){
        $("#tableCompra").html("");
        localStorage.setItem("compraValorIva", 0);
        alert("Se realizó su compra. Gracias!")
     }
     else{alert("No tiene productos en el carrito")}
    
});

let compraList = JSON.parse(localStorage.getItem("compraList")) || [];

if (compraList.length > 0) addNewCompraList();

