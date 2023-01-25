var listaNomes = ["Allan", "João", "Anderson", "Pedro"];
// Lista de Nomes para colocar nas li de HTML

var listaUL = document.createElement('ul'); // Criei a tag ul

var body = document.getElementsByTagName('body'); // Acessei a tag body para colocar os elementos ul e li no corpo

// console.log(body[0])

body[0].appendChild(listaUL); // adiciono o elemento "ul" na tag body

var listaNoBody = document.getElementsByTagName('ul'); // Acessei a tag "ul" pelo seu nome

console.log(listaNoBody[0]) // printei a tag "ul" na tag body para adicionar os elementos da listaNomes. Vai aparecer todas as li's

for(var i = 0; i < listaNomes.length; i++) {

    var liFor = document.createElement('li'); // Criei as tags com a quantidade de elementos de ListaNomes

    var textoLi = document.createTextNode(listaNomes[i]); // Aqui é onde vou colocar cada nome de ListaNomes em LiFor

    liFor.appendChild(textoLi); // Adiciono um a um cada nome de ListaNomes nas tags "li"

    listaNoBody[0].appendChild(liFor); // Então coloco cada "li" dentro da tag "ul"
}
