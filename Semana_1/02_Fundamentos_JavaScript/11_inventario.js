const inventario = [
  {
    producto: "Concha",
    precio: 18,
    cantidad: 8,
  },
  {
    producto: "Dona",
    precio: 22,
    cantidad: 5,
  },
  {
    producto: "Oreja",
    precio: 15,
    cantidad: 12,
  },
  {
    producto: "Cuernito",
    precio: 25,
    cantidad: 4,
  },
];

function valorTotal(precio, cantidad) {
  const total = precio * cantidad;
  return total;
}

console.log(`=================================== \n
Valor en el inventario por producto \n
=================================== \n
    `);

let sumaproductos = 0;

for (let i = 0; i < inventario.length; i++) {
  const totalproducto = valorTotal(
    inventario[i].precio,
    inventario[i].cantidad,
  );
  console.log(`${inventario[i].producto}          $${totalproducto}`);

  sumaproductos = sumaproductos + totalproducto;
}

console.log(`========================== \n
Valor total del inventario \n
========================== \n
$${sumaproductos}    `);

console.log(`============================== \n
Número de productos diferentes \n
============================== \n
${inventario.length}    `);
