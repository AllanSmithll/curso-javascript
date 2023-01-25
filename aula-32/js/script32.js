// 24/11/2022
// Criando Objetos com métodos

document.body.innerHTML = '<h1>Aula de Objetos com métodos</h1>'

let pessoa = {
    nome: 'Allan',
    idade: 18,
    falar: function() {
        console.log("Olá, tudo bem?")
    },
    soma: function(a, b) {
        return a + b
    }
}

console.log(pessoa.nome)

pessoa.falar();

var soma = pessoa.soma(10, 10)

console.log(soma)
