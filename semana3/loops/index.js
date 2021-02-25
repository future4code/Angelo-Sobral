// **Exercícios de interpretação de código**
// EXERCÍCIO 1
// Resposta: vai imprimir 10

// EXERCíCIO 2
// a) vai imprimir números maiores que 18
// b) não, mas dá pra cirar uma variavel para receber um indice a cada verificação do for of

// **Exercícios de escrita de código**
// EXERCÍCIO 3
// a)
// const arrayOriginal = [1,2,3,4,5,6,7,8,9,10]

// for (let numero of arrayOriginal) {
//     console.log(numero)
// }

// b)
// const arrayOriginal = [1,2,3,4,5,6,7,8,9,10]

// for (let numero of arrayOriginal) {
//     console.log(numero/10)
// }

// c)
// const arrayOriginal = [1,2,3,4,5,6,7,8,9,10]

// const newArray = []

// for (let numero of arrayOriginal) {
//     if (numero % 2 == 0) {
//         newArray.push(numero)
//     }
// }

// console.log(newArray)

// d)
// const arrayOriginal = [1,2,3,4,5,6,7,8,9,10]

// let i = 0

// for (let numero of arrayOriginal) {
//     console.log(`O elemento do index ${i} é ${numero}`)
    
//     i++
// }

// console.log(arrayOriginal)

// e)
// não entendi a questão



// DESAFIOS
// 1.
// uma tela chamando para jogar
// uma tela para informar o numero a ser adivinhado
// armazenar esse numero 
// tentar advinhar o numero
// verificar se o numero eh o certo e retornar acertou
// se o numero não for o certo, informar que errou dando dica se eh maior ou menor ate acertar
// informar a quantidade de tentativas até acertar
const numberPlayer1 = Number(prompt('Vamos jogar? Nesse jogo você será o jogador 1. Digite um número para que o jogador 2 possa advihar. Ah! Não se preocupe! Não vamos mostrar para ele. ^^'))

console.log('Vamos jogar!')

const attempts = []

let tryPlayer2 = Number(prompt('Jogador 2 tente acertar o numero:'))
console.log('O número chutado foi:', tryPlayer2)

if (tryPlayer2 < numberPlayer1) {
    console.log('Errou, o número é maior')
} else if (tryPlayer2 > numberPlayer1) {
    console.log('Errou, o número é menor')
}

attempts.push(tryPlayer2)

for (i =0; i < attempts.length; i++) {
    if (attempts[i] != numberPlayer1) {
        let tryPlayer2 = Number(prompt('Jogador 2 tente acertar o numero:'))
        console.log('O número chutado foi:', tryPlayer2)
        if (tryPlayer2 < numberPlayer1) {
            console.log('Errou, o número é maior')
        } else if (tryPlayer2 > numberPlayer1) {
            console.log('Errou, o número é menor')
        }        
        attempts.push(tryPlayer2)
    } else if (attempts[i] = numberPlayer1) {
        console.log('Acertou!!!')
        console.log(`O número de tentativas foi: ${attempts.length}`)
    }
}

