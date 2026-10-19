const pedido = [
  {
    producto: "Concha",
    precio: 18,
    cantidad: 6,
  },
  {
    producto: "Dona",
    precio: 22,
    cantidad: 5,
  },
  {
    producto: "Oreja",
    precio: 15,
    cantidad: 7,
  },
];

function precioTotalproducto(precio, cantidad) {
  const total = precio * cantidad;
  return total;
}

let subtotal = 0;

console.log(`==================== \n
DULCE PANADERÍA \n
==================== \n
Producto    Cantidad    Precio unitario   Precio total      `);

for (let i = 0; i < pedido.length; i++) {
  const totalxproducto = precioTotalproducto(
    pedido[i].precio,
    pedido[i].cantidad,
  );
  console.log(
    `${pedido[i].producto}            ${pedido[i].cantidad}                 $${pedido[i].precio}            $${totalxproducto}`,
  );
  subtotal = subtotal + totalxproducto;
}

console.log(`Subtotal : $${subtotal.toFixed(2)}`);

let descuento;

if (subtotal < 100) {
  descuento = 0;
} else if (subtotal >= 100 && subtotal < 200) {
  descuento = 0.1;
} else {
  descuento = 0.2;
}

const totaldescuento = subtotal * descuento;
const totalpagar = subtotal - totaldescuento;

console.log(`-------------------- `);
console.log(
  `Descuento (${descuento * 100}%)  : -$${totaldescuento.toFixed(2)}`,
);
console.log(`-------------------- `);
console.log(`Total a pagar  : $${totalpagar.toFixed(2)}`);
console.log(`==================== `);
