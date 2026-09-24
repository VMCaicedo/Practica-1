let productos = ["labial", "rímel", "base"];

let producto = {
    nombre: "Labial",
    precio: 150,
    disponible: true
};

function mostrarProducto(nombre, precio) {
    return nombre + " cuesta $" + precio;
}

console.log(productos[0]);
console.log(producto.precio);
console.log(mostrarProducto(producto.nombre, producto.precio));