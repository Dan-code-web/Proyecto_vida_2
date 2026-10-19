function aplicarDescuento(total) {
  if (total < 100) {
    return total;
  } else if (total >= 100 && total < 200) {
    return total - total * 0.1;
  } else {
    return total - total * 0.2;
  }
}

console.log(`Su total con descuento es ${aplicarDescuento(80)}`);

console.log(`Su total con descuento es ${aplicarDescuento(150)}`);

console.log(`Su total con descuento es ${aplicarDescuento(250)}`);
