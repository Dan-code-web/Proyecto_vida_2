import { test, expect } from "vitest";
import { calcularTotal } from "./operaciones";
import { catalogo } from "./datos";

test("Total del catálogo", () => {
  expect(calcularTotal(catalogo)).toBe(42.5);
});

test("Arreglo vacío", () => {
  expect(calcularTotal([])).toBe(0);
});

/* VERSIONES ORIGINALES
const resultado = calcularTotal(catalogo);

if (resultado === 42.5) {
  console.log("Prueba superada");
} else {
  console.log("Prueba fallida");
}
*/
/*
const resultadoVacio = calcularTotal([]);

if (resultadoVacio === 0) {
  console.log("Prueba de arreglo vacío superada");
} else {
  console.log("Prueba de arreglo vacío fallida");
}
*/
