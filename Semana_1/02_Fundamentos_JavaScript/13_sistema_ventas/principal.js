import { importeindividual } from "./operaciones.js";

const ventas = [
  /*Arreglo con registro de ventas                    PASO 1: AQUI*/
  {
    numeroventa: 1,
    producto: "Concha",
    precio: 18,
    cantidad: 4,
    total: 0,
  },
  {
    numeroventa: 2,
    producto: "Dona",
    precio: 22,
    cantidad: 3,
    total: 0,
  },
  {
    numeroventa: 3,
    producto: "Oreja",
    precio: 15,
    cantidad: 6,
    total: 0,
  },
  {
    numeroventa: 4,
    producto: "Cuernito",
    precio: 25,
    cantidad: 2,
    total: 0,
  },
  {
    numeroventa: 5,
    producto: "Concha",
    precio: 18,
    cantidad: 5,
    total: 0,
  },
];

let sumatotal = 0;
/*                                                    Inicio del console.log final */
console.log(`========================================
=         DULCE PANADERÍA              =
========================================
          Reporte del dia
VENTAS:`);
/*PASO 2: AQUI*/
for (let i = 0; i < ventas.length; i++) {
  const totalxproducto = importeindividual(
    ventas[i].precio,
    ventas[i].cantidad,
  );

  ventas[i].total = totalxproducto;
  console.log(`${ventas[i].total}`);
  sumatotal = sumatotal + totalxproducto;
}

/*PASO 3: AQUI*/
console.log(`----------------------------------------
INGRESO TOTAL DEL DIA:
${sumatotal}`);

let compramayor = 0;
let productomayor = "";
let cantidadmayor = 0;
let compramayor2 = 0;
let productomayor2 = "";
let cantidadmayor2 = 0;

function calculomayor(total, producto, cantidad) {
  if (total > compramayor) {
    compramayor = total;
    productomayor = producto;
    cantidadmayor = cantidad;
  } else if (total == compramayor) {
    compramayor2 = total;
    productomayor2 = producto;
    cantidadmayor2 = cantidad;
  }
}

for (let e = 0; e < ventas.length; e++) {
  calculomayor(ventas[e].total, ventas[e].producto, ventas[e].cantidad);
}
/*                                                      PASO 4: AQUI*/
console.log(`----------------------------------------
VENTA DE MAYOR IMPORTE
----------------------------------------
Nombre de producto: ${productomayor}
Monto total: $${compramayor}
Unidades vendidas: ${cantidadmayor} \n`);

if (compramayor2 !== 0) {
  console.log(`PRODUCTO CON MISMO IMPORTE
Nombre de producto: ${productomayor2}
Monto total: $${compramayor2}
Unidades vendidas: ${cantidadmayor2} \n`);
}
/*                                                       PASO 5: AQUI */
console.log(`----------------------------------------
CLASIFICACION DEL INGRESO TOTAL DEL DIA
----------------------------------------
Ingreso del dia: $${sumatotal}
`);

if (sumatotal < 200) {
  console.log(`Clasificación del dia: Dia de ventas bajas.`);
} else if (sumatotal >= 200 && sumatotal < 350) {
  console.log(`Clasificación del dia: Dia de ventas normales.`);
} else {
  console.log(`Clasificación del dia: Dia de ventas altas.`);
}

console.log(`========================================`);
