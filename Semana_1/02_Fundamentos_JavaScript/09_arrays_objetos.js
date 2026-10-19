const catalogo = [
  {
    nombre: "Concha",
    precio: 18,
    cantidad: 8,
  },
  {
    nombre: "Dona",
    precio: 22,
    cantidad: 5,
  },
  {
    nombre: "Oreja",
    precio: 15,
    cantidad: 12,
  },
];

for (let i = 0; i < catalogo.length; i++) {
  console.log(catalogo[i].nombre, catalogo[i].precio);
}
