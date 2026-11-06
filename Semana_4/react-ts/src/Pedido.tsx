type PedidoProps = {
  nombre: string;
  total: number;
  observacion?: string;
};

export function Pedido({
  nombre,
  total,
  observacion,
}: PedidoProps): React.JSX.Element {
  return (
    <div>
      {nombre} {total}
      {observacion && <p>{observacion}</p>}
    </div>
  );
}

export {};
