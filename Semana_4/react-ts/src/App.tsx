import { useState, useEffect } from "react";
import { Pedido } from "./Pedido";
import { catalogo, pedidoEjemplo } from "./datos.ts";
import { calcularTotal, obtenerPrimero, obtenerPedido } from "./operaciones.ts";
import type { Pedido as PedidoTipo } from "./tipos.ts";

function App(): React.JSX.Element {
  const [total, setTotal] = useState<number>(64);
  const totalCatalogo = calcularTotal(catalogo);
  const totalPedido = calcularTotal(pedidoEjemplo.productos);
  const primerProducto = obtenerPrimero(catalogo);
  const [pedidoCargado, setPedidoCargado] = useState<PedidoTipo | null>(null);

  useEffect(() => {
    async function cargarPedido(): Promise<void> {
      const pedido = await obtenerPedido();
      setPedidoCargado(pedido);
    }
    cargarPedido();
  }, []);

  function agregado(): void {
    setTotal((anterior) => anterior + 10);
  }

  function restablecerAgregado(
    evento: React.MouseEvent<HTMLButtonElement>,
  ): void {
    setTotal(64);
    console.log(evento.currentTarget.textContent);
  }

  return (
    <div>
      <div>
        <h2>Pedido 1</h2>
        <Pedido
          nombre="Gerardo"
          total={total}
          observacion="Entregar antes de las 5"
        />
        <button onClick={agregado}>Agregar $10</button>
        <button onClick={restablecerAgregado}>Restablecer total</button>
        <p>Total del catálogo: ${totalCatalogo}</p>
      </div>
      <div>
        <h2>Pedido 2</h2>
        <Pedido nombre={pedidoEjemplo.cliente} total={totalPedido} />
      </div>
      <div>
        <h2>Primer producto del catálogo: {primerProducto?.nombre}</h2>
      </div>
      <div>
        <h2>Pedido cargado</h2>
        {pedidoCargado === null ? (
          <p>Cargando pedido</p>
        ) : (
          <p>
            Nombre del cliente: {pedidoCargado.cliente} Folio del pedido:{" "}
            {pedidoCargado.folio}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
