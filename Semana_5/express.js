import express from "express";

const catalogo = [
  {
    id: 12,
    nombre: "Dona",
    precio: 15.5,
  },
  {
    id: 24,
    nombre: "Concha",
    precio: 10,
  },
  {
    id: 36,
    nombre: "Oreja",
    precio: 14,
  },
];

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Bienvenido a Dulce Panadería");
});

app.get("/productos", (req, res) => {
  res.json(catalogo);
});

app.get("/productos/:id", (req, res) => {
  const id = Number(req.params.id);
  const producto = catalogo.find((elemento) => elemento.id === id);

  if (producto) {
    res.json(producto);
  } else {
    res.status(404).send("Producto no encontrado");
  }
});

app.post("/productos", (req, res) => {
  const producto = req.body;
  catalogo.push(producto);
  res.status(201).send("Producto registrado correctamente");
});

app.delete("/productos/:id", (req, res) => {
  const id = Number(req.params.id);
  const indice = catalogo.findIndex((elemento) => elemento.id === id);
  if (indice === -1) {
    res.status(404).send("Producto no encontrado");
  } else {
    catalogo.splice(indice, 1);
    res.status(200).send("Producto eliminado correctamente");
  }
});

app.patch("/productos/:id", (req, res) => {
  const id = Number(req.params.id);
  const productoActualizado = catalogo.find((elemento) => elemento.id === id);
  const nuevoPrecio = Number(req.body.precio);

  if (productoActualizado) {
    productoActualizado.precio = nuevoPrecio;
    res.json(productoActualizado);
  } else {
    res.status(404).send("Producto no encontrado");
  }
});

app.listen(3000);
