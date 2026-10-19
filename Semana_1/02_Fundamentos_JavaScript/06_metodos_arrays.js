const productos = ["Concha", "Dona", "Oreja"];

productos.push("Polvorón");
productos.unshift("Cuernito");
productos.pop();
productos.shift();

console.log(`Lista de productos: \n
    ${productos} \n
    Número de productos: \n
    ${productos.length}`);
