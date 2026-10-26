import { useState } from "react";
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

  return (
    <section id="catalogo">
      <h2>Nuestro catálogo</h2>
      <input type="text" value={busqueda} onChange={manejarBusqueda} />
      <button onClick={limpiarBusqueda}>Limpiar búsqueda</button>
      <p>{busqueda}</p>
      <div className="catalogo-acostado">
        <Producto nombre="Concha" precio={12.5} />
        <Producto nombre="Dona" precio={18.0} />
        <Producto nombre="Oreja" precio={15.5} />
        <Producto nombre="Polvorón" precio={9.0} />
      </div>
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
