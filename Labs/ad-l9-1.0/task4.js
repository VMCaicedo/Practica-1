const contenedor = document.getElementById("container");

const elementosSegundo = document.querySelectorAll(".second");

const tercerElemento = document.querySelector("ol .third");

const footer = document.querySelector(".footer");
const lista = document.querySelector("ul");

// Agregar el texto sin eliminar las listas
contenedor.insertAdjacentText("afterbegin", "¡Hola! ");

footer.classList.add("main");
footer.classList.remove("main");

// Crear y agregar el nuevo elemento
const nuevoElemento = document.createElement("li");
nuevoElemento.textContent = "four";
lista.appendChild(nuevoElemento)