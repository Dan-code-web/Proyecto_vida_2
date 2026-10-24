const titulo = document.querySelector("h1");
titulo.textContent = "Bienvenido a la Semana 2";

const productos = document.querySelectorAll(".producto");
/*
productos[0].textContent = "Concha de chocolate";
productos[2].textContent = "Cuernito de mantequilla";
*/
console.log(`${productos.length}`);

const catalogo = document.querySelector("#catalogo");
/*
const nuevoproducto = document.createElement("p");
nuevoproducto.textContent = "Panque de vainilla";
catalogo.appendChild(nuevoproducto);

productos[1].remove();
nuevoproducto.remove();
*/
const enlaceconsulta = document.querySelector("#consulta");
enlaceconsulta.setAttribute("href", "https://developer.mozilla.org/es/");
enlaceconsulta.setAttribute("target", "_blank");
/*
productos[1].classList.add("agotado");
productos[2].classList.add("agotado");
productos[2].classList.remove("agotado");
console.log(productos[1].classList.contains("agotado"));
productos[0].classList.toggle("agotado");
*/
const boton = document.querySelector("#botoncambio");

function cambiarEstado(event) {
  productos[1].classList.toggle("agotado");
  console.log(event.type, event.target);
}
boton.addEventListener("click", cambiarEstado);

const busquedacat = document.querySelector("#busquedacatalogo");
const busquedatex = document.querySelector("#busquedatexto");
function mostrarBusqueda(event) {
  busquedatex.textContent = event.target.value;
}
busquedacat.addEventListener("input", mostrarBusqueda);

/*///////////////////////////////////////////////////////////////////////////////////////////////// */

const formulario = document.querySelector("#formulario");
const inputnombre = document.querySelector("#inpnombre");
const inputproducto = document.querySelector("#inpproducto");
const parrafo = document.querySelector("#confirmacion");

function registrarPedido(event) {
  event.preventDefault();
  parrafo.textContent = `Nombre de cliente: ${inputnombre.value}
  Cantidad de productos: ${inputproducto.value}`;
}
formulario.addEventListener("submit", registrarPedido);
