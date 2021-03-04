// Exercícios de interpretação de código
// 1. a. 10 // 50
// b. O console não imprimiria os valores.

// 2. a. O console imprimirá as 2 primeiras posiçãoes do array, 'Darvas' e 'Caio'.
// b. 'Amanda' e 'Caio'

// 3. A função verfica cada posição do array, se for um número par, ela dá um push para o arrayFinal multiplicando o valor por ele mesmo. E no final, retorna o arrayFinal. Sugestão de nome retornoParQuadrado

// Exercícios de escrita de código
// 4. a.

function biografia() {
    console.log("Aqui é o Ângelo, tenho 34 anos, sou de Salvador, Bahia!")
}

// b. 

function novaBiografia(nome, idade, cidade , boleano) {
    let sou
    if (boleano === true) {
        sou ='sou'
    } else {sou ='não sou'}

    return `Aqui é ${nome}, tenho ${idade}, sou de ${cidade}, ${sou} estudante.`
}

// 5. a.
function soma(n1,n2) {
    let soma = n1+n2
    return soma
}

// Resposta Labenu
// function soma(n1,n2) {
//     return n1+n2
// }


console.log(soma(13,45))

// b.
function trueOrFalse(num1,num2) {
    if (num1 >= num2) {
        return true
    } else { return false}
}

// Resposta Labenu
// function trueOrFalse(num1,num2) {
//     return num1 >= num2
// }

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

// Resposta Labenu
// function quantidadeArray(array) {
//         return array.length
// }

// b.
function verficaPar(numero) {
    if (numero % 2 === 0) {
        return true
    } else { return false}
}

// Resposta labenu
// function ehPar(numero) {
//     return numero % 2 === 0
// }

// c.
function verificaParArray(array) {
    let par = []
    for (i=0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            par.push(array[i])
        }
    }
    return par.length
}

//d.
function nverificaParArray(array) {
    let par = []
    for (i=0; i < array.length; i++) {
        if (verficaPar(array[i])) {
        par.push(array[i])}
    }
    return par
}

// DESAFIOS
// 1. 
let parametro = (nome) => {
    console.log('achei o parametro:', nome)
}

// 2.
let somaParametro = (valor1, valor2) => {
    let res = valor1 + valor2
    parametro(res)
}

somaParametro(3,86)