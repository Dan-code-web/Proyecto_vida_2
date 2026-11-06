interface Pedido {
  folio: number;
  cliente: string;
  total: number;
  observaciones?: string;
  productos: Producto[];
}

type Producto = {
  nombre: string;
  precio: number;
  descripcion?: string;
  categoria: CategoriaPan;
};

type CategoriaPan = "dulce" | "salado" | "integral";

const concha: Producto = {
  nombre: "Concha",
  precio: 12,
  categoria: "integral",
};

const panes: Producto[] = [
  {
    nombre: "Oreja",
    precio: 15.5,
    descripcion: "Hojaldre",
    categoria: "dulce",
  },
  { nombre: "Dona", precio: 18.0, categoria: "dulce" },
  { nombre: "Polvorón", precio: 9.0, categoria: "salado" },
];

const primerPan = panes[0];

const pedido1: Pedido = {
  folio: 3234,
  cliente: "Gerardo",
  total: 64,
  productos: [panes[0]!, panes[1]!, concha],
};
/*
console.log("=================== Prueba 1");

if (primerPan !== undefined) {
  console.log(calcularPrecioConIVA(primerPan.precio));
}

panes.forEach((producto) => {
  mostrarProducto(producto);
});

mostrarProducto(concha);

function mostrarProducto(producto: Producto): void {
  console.log(
    `${producto.nombre} (${producto.categoria})  = ${producto.precio}`,
  );
  if (producto.descripcion) {
    console.log(`${producto.descripcion}`);
  }
}

function calcularPrecioConIVA(precio: number): number {
  precio = precio + precio * 0.16;
  return precio;
}

function mostrarIdentificador(id: number | string) {
  console.log(id);
}

function obtenerPrimero<T>(elementos: T[]): T | undefined {
  return elementos[0];
}
*/

async function obtenerNombrePan(): Promise<string> {
  return "Concha";
}

async function mostrarPan(): Promise<void> {
  const promesa = await obtenerNombrePan();
  console.log(promesa);
}

async function obtenerPedido(): Promise<Pedido> {
  return pedido1;
}

async function mostrarPedido(): Promise<void> {
  const comprador = await obtenerPedido();
  console.log(comprador.cliente);
}

mostrarPedido();

/*

mostrarPan();

console.log(obtenerNombrePan());

mostrarIdentificador(1);
mostrarIdentificador("PAN-002");

console.log("=================== Prueba 2");

console.log(pedido1);

console.log("=================== Prueba 3");

pedido1.productos.forEach((pan) => console.log(pan.nombre));

console.log("=================== Prueba 4");

console.log(obtenerPrimero(panes));

console.log("=================== Prueba 5");

console.log(obtenerPrimero([12, 24, 36]));

console.log(obtenerPrimero([]));
*/
export {};
