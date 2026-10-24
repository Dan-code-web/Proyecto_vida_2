const boton = document.querySelector("#cargar-productos");
let extension = false;

async function ejecutarEndpoint() {
  const mensajecarga = document.querySelector(".load-message");

  try {
    if (!extension) {
      mensajecarga.textContent = "Cargando productos...";
      const respuesta = await fetch("https://dummyjson.com/products?limit=6");

      if (!respuesta.ok) {
        throw new Error(`Error de respuesta de botón. ${respuesta.status}`);
      }

      const resultado = await respuesta.json();
      const conjunto = resultado.products;
      const productos = document.querySelector(".product");

      for (let i = 0; i < conjunto.length; i++) {
        const nuevocontenedor = document.createElement("div");
        const nuevotitulo = document.createElement("h3");
        const nuevoprecio = document.createElement("p");

        nuevocontenedor.classList.add("product-container");
        nuevoprecio.classList.add("price");

        nuevotitulo.textContent = conjunto[i].title;
        nuevoprecio.textContent = conjunto[i].price;

        nuevocontenedor.appendChild(nuevotitulo);
        nuevocontenedor.appendChild(nuevoprecio);
        productos.appendChild(nuevocontenedor);

        const nuevoboton = document.createElement("button");

        nuevoboton.textContent = "Marcar agotado";

        nuevocontenedor.appendChild(nuevoboton);

        function ejecutarApagado() {
          nuevocontenedor.classList.toggle("out-of-stock");
        }

        nuevoboton.addEventListener("click", ejecutarApagado);
      }

      mensajecarga.textContent = "Productos cargados exitosamente";

      extension = true;
    }
  } catch (error) {
    console.error(error);

    mensajecarga.textContent = "No se pudieron cargar los productos...";
  }
}

boton.addEventListener("click", ejecutarEndpoint);
