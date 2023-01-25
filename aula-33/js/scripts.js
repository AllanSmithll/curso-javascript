// 24/11/2022
// Aula sobre a instrução "this"

console.log(this)

let pessoa = {
    nome: 'Allan',
    idade: 18,
    falar: function() {
        console.log("Olá, tudo bem?")
    },

    dizerNomeComThis: function() {
        console.log("Olá, tudo bem? Meu nome é " + this.nome + ".")
    },
    aniversario: function() {
        this.idade += 1;
    }
}

pessoa.dizerNomeComThis()

console.log(pessoa.idade)

pessoa.aniversario();

console.log(pessoa.idade)