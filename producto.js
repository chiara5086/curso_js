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