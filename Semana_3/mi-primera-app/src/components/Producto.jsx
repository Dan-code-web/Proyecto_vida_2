import { useState } from "react";
import { useEffect } from "react";
/* ========== COMPONENTE PRINCIPAL CATALOGO (PADRE DE PRODUCTO) ========== ----------------------------------------------------------------- */
function Catalogo() {
  /* ========== Funciones secundarias para busqueda */
  const [busqueda, setBusqueda] = useState("");

  function manejarBusqueda(evento) {
    setBusqueda(evento.target.value);
  }

  function limpiarBusqueda() {
    setBusqueda("");
  }

  /* ========== Retorno general ========== */
  const productos = [
    { id: 1, nombre: "Concha", precio: 12.5 },
    { id: 2, nombre: "Dona", precio: 18.0 },
    { id: 3, nombre: "Oreja", precio: 15.5 },
    { id: 4, nombre: "Polvorón", precio: 9.0 },
  ];

  const productosFiltrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase()),
  );

  return (
    <section id="catalogo">
      <h2>Nuestro catálogo</h2>
      <input type="text" value={busqueda} onChange={manejarBusqueda} />
      <button onClick={limpiarBusqueda}>Limpiar búsqueda</button>
      <p>{busqueda}</p>
      <div className="catalogo-acostado">
        {productosFiltrados.map((producto) => (
          <Producto
            key={producto.id}
            nombre={producto.nombre}
            precio={producto.precio}
          />
        ))}
      </div>
      {productosFiltrados.length === 0 && (
        <p>
          <b>No se encontraron productos</b>
        </p>
      )}
    </section>
  );
}

/* ========== COMPONENTE PRINCIPAL PRODUCTO ========== ----------------------------------------------------------------- */

function Producto({ nombre, precio }) {
  /* ========== Funcion secundaria para favoritos ========== */
  const [favorito, setFavorito] = useState(false);

  function alternarFavorito() {
    setFavorito((anterior) => !anterior);
  }
  /* ========== Funcion secundaria para contador ========== */
  const [cantidad, setCantidad] = useState(0);

  function aumentarCantidad() {
    setCantidad((anterior) => anterior + 1);
  }

  function disminuirCantidad() {
    if (cantidad > 0) {
      setCantidad((anterior) => anterior - 1);
    }
  }

  useEffect(() => {
    document.title = `Cantidad seleccionada: ${cantidad}`;
  }, [cantidad]);

  /* ========== Retorno general ========== */
  return (
    <section className="tarjeta">
      <h3>{nombre}</h3>
      <p>${precio}</p>
      <div className="catalogo-acostado">
        <button onClick={aumentarCantidad}>+</button>
        <p>{cantidad}</p>
        <button onClick={disminuirCantidad}>-</button>
      </div>
      {cantidad > 0 && <p>Producto agregado al pedido</p>}
      <div>
        <button onClick={alternarFavorito}>
          {favorito ? "Quitar de favoritos" : "Agregar a favoritos"}
        </button>
      </div>
      {favorito ? "Es favorito" : "No es favorito"}
    </section>
  );
}
/* ========== Exportaciones ========== */
export default Catalogo;
