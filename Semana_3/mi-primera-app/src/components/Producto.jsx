function Catalogo() {
  return (
    <section>
      <h2>Nuestro catálogo</h2>
      <Producto nombre="Concha" precio={12.5} />
      <Producto nombre="Dona" precio={18.0} />
      <Producto nombre="Oreja" precio={15.5} />
      <Producto nombre="Polvorón" precio={9.0} />
    </section>
  );
}

function Producto({ nombre, precio }) {
  return (
    <section className="tarjeta">
      <div>
        <h3>{nombre}</h3>
        <p>${precio}</p>
      </div>
    </section>
  );
}

export default Catalogo;
