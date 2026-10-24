async function consultarTarea() {
  try {
    const respuesta = await fetch(
      "https://jsonplaceholder.typicode.com/ruta-inexistente",
    );
    if (!respuesta.ok) {
      throw new Error(`Error de respuesta. ${respuesta.status}`);
    }
    const datos = await respuesta.json();
    console.log(`${datos.title}, ${datos.completed}`);
  } catch (error) {
    console.error(error);
  }
}

consultarTarea();
