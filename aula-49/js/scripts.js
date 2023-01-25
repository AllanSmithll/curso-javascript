// 22/01/2023
// Click
var btn = document.querySelector('#btn')

console.log(btn) // Selecionei o button que estou trabalhando

btn.addEventListener('click', function () {

    // Toda vez que clico no btn (button), vai aparecer no console a string "Clicou" e ficará com a cor do texto vermelho

    console.log("CLICOU")

    console.log(this)

    this.style.color = "red"
}); 

// Click em um elemento qualquer do documento
var title = document.querySelector('#title') // No title

title.addEventListener('click', function () { 

    // Toda vez que clicar no elemento de ID title, o subtitle desaparecerá da tela

    var subtitle = document.querySelector('.subtitle')

    subtitle.style.display = "none"

});

// Double click
var subtitle = document.querySelector('.subtitle')

subtitle.addEventListener('click', function () { 
    
    // Vou clicar no subtitle, e aparecerá no console a frase "Duplo clique"
    
    console.log("Duplo clique")
    
})