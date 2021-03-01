// Exercícios de interpretação de código
// 1. a. 10 // 50
// b. O console não imprimiria os valores.

// 2. a. O console imprimirá as 2 primeiras posiçãoes do array, 'Darvas' e 'Caio'.
// b. 'Amanda' e 'Caio'

// 3. A função verfica cada posição do array, se for um número par, ela dá um push para o arrayFinal multiplicando o valor por ele mesmo. E no final, retorna o arrayFinal.

// Exercícios de escrita de código
// 4. a.

// function biografia() {
//     console.log("Aqui é o Ângelo, tenho 34 anos, sou de Salvador, Bahia!")
// }

//b. 

// function novaBiografia(nome, idade, cidade , boleano) {
//     let sou
//     if (boleano === true) {
//         sou ='sou'
//     } else {sou ='não sou'}

//     return `Aqui é ${nome}, tenho ${idade}, sou de ${cidade}, ${sou} estudante.`
// }

// 5. a.
function soma(n1,n2) {
    let soma = n1+n2

    return soma
}

console.log(soma(13,45))

// b.
function trueOrFalse(num1,num2) {
    if (num1 >= num2) {
        return true
    } else { return false}
}

// c.
function printText(texto) {
    for (i = 0; i < 10; i++) {
        console.log(texto)
    }
}

// 6. a.
const numeros = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

function quantidadeArray(array) {
    for (i=0; i < array.length; i++) {
        return array.length
    }
}
// b.