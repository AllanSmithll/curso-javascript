// 24/01/2023
// Evento mouseover
var title = document.querySelector('#title');

title.addEventListener("mouseover", function() { 
    // Evento mouseover, quando o mouse está sobre o elemento em questão (neste exemplo, o title).
    this.style.backgroundColor = "yellow"; // Quando o mouse estiver sobre o título, o plano de fundo fica amarelo

})

// Evento mouseout
title.addEventListener("mouseout", function() { 
    // Mouseout é quando o mouse é retirado de cima do elemento
    this.style.backgroundColor = "red" ; // Quando é retirado, o plano de fundo fica vermelho
}
);

// Afetar outro elemento com mouseover
var subtitle = document.querySelector('.subtitle'); 

subtitle.addEventListener("mouseover", function() {

    var legenda = document.querySelector('#legenda'); // Aqui, seleciono o elemento de id legenda
    legenda.classList.remove("hide") // Faço com que a classe do elemento hide seja removida deste elemento, que está no css com "display: none;", que faz com que ele desapareça da tela
    // Quando o mouse estiver sobre ele
}
);

// Afetar outro elemento com mouseout
subtitle.addEventListener("mouseout", function() {

    var legenda = document.querySelector('#legenda');

    legenda.classList.add("hide") // Quando o mouse for retirado dele, a classe "hide" volta para "legenda", fazendo com que ele volte a ter "display: none;", que faz ele desaparecer novamente
}
);