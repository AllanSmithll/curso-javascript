// 20/01/2023
window.onload = function() {
    // Dispara o window (DOM) imediatamente após o navergador carregá-lo
    console.log("Carregou o DOM.")

    var title2 = document.querySelector('#title')  

    console.log(title2) // Só aqui mostra o title, porque o DOM foi carregado completamente

}

console.log("Carregou o JS")

var title = document.querySelector('#title')

console.log(title) // Não mostra o title, porque o DOM não foi carregado