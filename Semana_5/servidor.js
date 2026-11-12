import { createServer } from "node:http";

const catalogo = [
  {
    id: 12,
    nombre: "Dona",
    precio: 15.5,
  },
  {
    id: 24,
    nombre: "Concha",
    precio: 10,
  },
  {
    id: 36,
    nombre: "Oreja",
    precio: 14,
  },
];

const servidor = createServer((request, response) => {
  response.setHeader("Content-Type", "text/plain; charset=utf-8");

  if (request.url === "/") {
    response.end("Bienvenido al servidor de Dulce panadería");
  } else if (request.url === "/productos" && request.method === "GET") {
    response.setHeader("Content-Type", "application/json; charset=utf-8");
    response.end(JSON.stringify(catalogo));
  } else if (request.url === "/productos" && request.method === "POST") {
    let cuerpo = "";
    request.on("data", (fragmento) => {
      cuerpo += fragmento;
    });
    request.on("end", () => {
      const producto = JSON.parse(cuerpo);
      catalogo.push(producto);
      console.log(`${producto.nombre} precio: ${producto.precio}`);
      response.end("Producto recibido correctamente");
    });
  } else if (request.url === "/pedidos") {
    response.end("Pedidos registrados: 23");
  } else {
    response.statusCode = 404;
    response.end("Ruta no encontrada");
  }
});

servidor.listen(3000);
