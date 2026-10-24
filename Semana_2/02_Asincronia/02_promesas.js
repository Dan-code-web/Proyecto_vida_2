const pedido = new Promise((resolve, reject) => {
  const hayIngredientes = false;
  setTimeout(comprobacion, 2000);

  function comprobacion() {
    if (hayIngredientes) {
      resolve(`Pedido preparado correctamente`);
    } else {
      reject(`No hay ingrediente suficientes`);
    }
  }
});

pedido
  .then(function (resultado) {
    console.log(resultado);
  })
  .catch(function (error) {
    console.log(error);
  });
