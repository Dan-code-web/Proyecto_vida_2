import type { Producto } from "./tipos.ts";
import type { Pedido } from "./tipos.ts";

export const catalogo: Producto[] = [
  { id: 12, nombre: "Oreja", precio: 15.5, categoria: "dulce" },
  { id: 23, nombre: "Dona", precio: 18.0, categoria: "dulce" },
  { id: 34, nombre: "Polvorón", precio: 9.0, categoria: "salado" },
];

export const pedidoEjemplo: Pedido = {
  folio: 1111,
  cliente: "Juan",
  productos: [catalogo[0], catalogo[1]],
  observaciones: "Llegar antes de las 12",
};
