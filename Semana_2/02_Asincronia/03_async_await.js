const pedido = new Promise((resolve, reject) => {
  const hayIngredientes = true;
  setTimeout(comprobacion, 2000);

  function comprobacion() {
    if (hayIngredientes) {
      resolve(`Pedido preparado correctamente`);
    } else {
      reject(`No hay ingrediente suficientes`);
    }
  }
});

async function consultarPedido() {
  try {
    const resultado = await pedido;
    console.log(resultado);
  } catch (error) {
    console.log(error);
  }
}

consultarPedido();
