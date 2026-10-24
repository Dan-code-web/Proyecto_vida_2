async function consultarTarea() {
  try {
    const respuesta = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1",
    );
    const datos = await respuesta.json();
    console.log(`${datos.title}, ${datos.completed}`);
  } catch (error) {
    console.error(error);
  }
}

consultarTarea();
