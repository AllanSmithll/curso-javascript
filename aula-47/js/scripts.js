// 20/01/2023
// clearTimeout

var x = 0;

var myTimer = setTimeout(function() {
    console.log("X é 0.");
}, 1500); // Depois de 1 segundo e meio, aparece uma mensagem, com x igual a 0. Mas não aparecerá se, antes, for aplicado "clearTimeout"

x = 5 // X igual a 5

if (x > 0) {
    clearTimeout(myTimer); // limpar o timeout de "myTimer"
    console.log("X passou de 0."); // E mostrar essta mensagem se x maior que 0
}

// clearSetInterval na prática

var myInterval = setInterval(function() {
    console.log("Imprimindo interval")
}, 500); // Depois de meio segundo, começa a impressão do "myInterval" - que é infinita, se não for interrompido

setTimeout(function() {
    console.log("Não precisamos repetir!") // Imprime
    clearInterval(myInterval);
}, 1500)