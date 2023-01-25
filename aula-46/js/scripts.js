// 18/01/2023
// setTimeout e setInterval

// 1- setTimeout
console.log("Antes do setTimeout")

setTimeout(function() {
    console.log("Testando o setTimeout.")
}, 2000) 
// Aqui no setTimeout, atribuí dois argumentos: uma function() e um tempo. Esta função é uma Callback Function, pois esta sendo passada dentro de outra função.
// E o segundo argumento, é o tempo em milissegundos que será mostrado, de forma assíncrona, o que está dentro da função

// 2- setInterval
setInterval(function() {
    console.log("Testando o setInterval.")
}, 1000);
// Já no setInterval, também há a mesma situação, só que não é mostrado uma vez, e sim infinitas vezes, como se estivesse em um loop infinito.
// Acontece que isto é uma desvantagem para computadores mais antigos, pois não suportam tanta carga de informações, se esta function estiver "cheia"

console.log("Depois do setInterval.")