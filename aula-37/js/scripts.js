// 10/01/2022
// selecionar elemento
var title = document.querySelector('#title');

// innerHTML
title.innerHTML = "Testando o texto alterado!"

// textContent -> mais utilizado, recomendado e perfomático

var subtitle = document.querySelector('.subtitle');

console.log(subtitle);

subtitle.textContent = "Testando o textContent!";