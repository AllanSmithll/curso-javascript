// 03/01/2022
// Aula de DOM

// TAG
var titulo = document.getElementsByTagName('h1')[0].innerHTML
// 1 - Se eu coloco apenas ...('h1'), retornaria um "HTMLCollection"
// 2 - Se eu coloco ...('h1')[0], retorna "<h1>Conteúdo que está dentro do H1</h1>"
// 3 - Por fim, se coloco ...('h1')[0].innerHTML, retornará apenas o conteúdo que está dentro da tag H1

console.log(titulo)

var lis = document.getElementsByTagName('li')

console.log(lis)

// ID

var paragrafo = document.getElementById('paragrafo')

console.log(paragrafo)

// CLASS

var itensDaLista = document.getElementsByClassName('item')[3]

console.log(itensDaLista)