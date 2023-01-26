// 26/01/2023
// Teoria
// function primeiraFuncao() {

//     return new Promise((resolve) => {
        
//         setTimeout(() => {
//             console.log("Esperou isso aqui.")
//             resolve()
//         }, 1000)

//     })
// }

// async function segundaFuncao() {
//     console.log('Iniciou.')

//     await primeiraFuncao()

//     console.log("Terminou.")
// }

// segundaFuncao()

// Prática
function getUser(id) {

    return fetch(`https://regres.in/api/user?id=${id}`).then((data) => data.json()).catch((err) => console.error(err))
}

async function showUserName(id) {
    const user = await getUser(id)

    console.log(`O nome do usuário é: ${user.data.first_name}`)
}

showUserName(1)