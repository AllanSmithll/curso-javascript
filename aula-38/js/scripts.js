// 12/01/2023
// Inserir elemento no body
var novoParagrafo = document.createElement("p")

console.log(novoParagrafo)

var texto = document.createTextNode("Parágrago criado")

novoParagrafo.appendChild(texto)

console.log(novoParagrafo)

var body = document.querySelector("body")

console.log(body)

body.appendChild(novoParagrafo)

// Inserir em um container

var container = document.getElementById("container")

console.log(container);

var elemento = document.createElement("span")

elemento.appendChild(document.createTextNode("Texto de span"))

console.log(elemento)

container.appendChild(elemento)