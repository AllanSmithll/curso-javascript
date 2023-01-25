// 18/01/2023
// CallBack

function exibir (num) {
    // chamei esta função a partir de outras duas abaixo
    console.log(`A operação resultou em: ${num}`)
}

function soma(a, b, callback) {
    // Função somar dois números
    var op = a + b
    callback(op)
}

function multiplicacao(a, b, cb) {
    // Função multiplicar dois el
    var op = a * b
    cb(op)
}

soma(2, 2, exibir)

multiplicacao(2, 4, exibir)

// EXPLICAÇÃO
// Chamo as funções "soma" e "multiplicao" normalmente, passando o "exibir" como terceiro parâmetro
// Parando para analizar, estou colocando uma função como parâmetro
// Significa que quando eu usar o terceiro parâmetro nas funções soma e multiplicao, este seria de tipo "function"
// Então o resultado dessa chamada de função dará algum resultado advindo desta função
