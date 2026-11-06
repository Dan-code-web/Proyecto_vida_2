import type { Producto, Pedido } from "./tipos.ts";
import { pedidoEjemplo } from "./datos.ts";

export function calcularTotal(productos: Producto[]): number {
  return productos.reduce((acumulador, producto) => {
    return acumulador + producto.precio;
  }, 0);
}

export function obtenerPrimero<T>(elementos: T[]): T | undefined {
  return elementos[0];
}

export async function obtenerPedido(): Promise<Pedido> {
  return pedidoEjemplo;
}

/* VERSIONES ORIGINALES

export function calcularTotal(productos: Producto[]): number {
  let suma: number = 0;
  productos.forEach((producto) => {
    suma += producto.precio;
  });
  return suma;
}

*/
