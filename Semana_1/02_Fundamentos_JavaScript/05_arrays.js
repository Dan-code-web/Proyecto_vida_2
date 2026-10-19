const precios = [18, 22, 15, 25, 30];

console.log(
  `Precio articulo 1 = ${precios[0]} /n Precio aarticulo 5 = ${precios[4]}`,
);
console.log(`Cantidad de productos con precio = ${precios.length}`);

precios[2] = 20;

for (let i = 0; i < precios.length; i++) {
  console.log(precios[i]);
}
