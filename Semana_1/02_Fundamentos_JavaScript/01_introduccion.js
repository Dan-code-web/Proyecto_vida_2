/*
const precioConcha = 18;
const precioDona = 22;
let cantidadConchas = 3;
let cantidadDonas = 2;
*/

function mostrarRecibo(cantidadConchas, cantidadDonas) {
  const precioConcha = 18;
  const precioDona = 22;
  const totalConchas = precioConcha * cantidadConchas;
  const totalDonas = precioDona * cantidadDonas;
  const totalGeneral = totalConchas + totalDonas;

  console.log(`=============== \n
  Recibo de compra \n
  =============== \n
  \n
  ${cantidadConchas} Concha = $${totalConchas} \n
  ${cantidadDonas} Dona = $${totalDonas} \n
  Total = $${totalGeneral}`);
}

mostrarRecibo(3, 2);

mostrarRecibo(4, 2);
