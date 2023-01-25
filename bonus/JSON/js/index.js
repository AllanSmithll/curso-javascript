// 24/01/2023
// Aula de JSON (a penúltima aula do curso)

// Objeto em JavaScript
const objts = [
    {
        nome: 'Allan',
        idade: 18,
        profissão: 'estudante',
        esta_trabalhando: false,
        gosta_de_livros: true
    },
    {
        nome: 'Anderson',
        idade: 19,
        profissão: 'estudante',
        esta_trabalhando: false,
        gosta_de_livros: false
    }
]

// Convertendo JS para JSON
const dataConvert = JSON.stringify(objts)

console.log(dataConvert)

// convertendo JSON para JS
const dataDesconvert = JSON.parse(dataConvert)

console.log(dataDesconvert)