// Exercício 1
// a)
// Através do process.argv

//b)

const myName = process.argv[2]
const age = Number(process.argv[3])
const colors = require('colors')
// if (myName && age) {
//     console.log(`Olá, ${myName}! Você tem ${age} anos.`)
// } else {
//     console.log('É necessário informar 2 parâmetros, só foi informado 1.')
// }

//c)
const futureAge = (Number(process.argv[3]) + 7)

if (myName && futureAge) {
    console.log(`Olá, ${myName}! Daqui a 7 anos você terá ${futureAge} anos.`.green)
} else {
    console.log('É necessário informar 2 parâmetros, só foi informado 1.'.red)
}

