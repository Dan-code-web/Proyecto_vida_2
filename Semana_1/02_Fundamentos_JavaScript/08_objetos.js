const producto = {
  nombre: "Concha",
  precio: 18,
  disponible: true,
  cantidad: 10,
};

console.log(`Producto: ${producto.nombre} \n
    Precio: $${producto.precio}`);

producto.cantidad = 8;

producto.categoria = "Pan dulce";

console.log(producto);
