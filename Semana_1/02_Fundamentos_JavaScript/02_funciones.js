function calcularCompra(cantidadConchas, cantidadDonas) {
  const precioConcha = 18;
  const precioDona = 22;
  const totalConchas = precioConcha * cantidadConchas;
  const totalDonas = precioDona * cantidadDonas;
  const totalGeneral = totalConchas + totalDonas;

  return totalGeneral;
}

const recibo = calcularCompra(5, 3);
console.log(recibo);
