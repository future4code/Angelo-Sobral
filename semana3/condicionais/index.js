// **Exercícios de interpretação de código**

// EXERCÍCIO 1
// Qual o teste que ele realiza? 
// Resposta: Ele realiza um teste de verificação de resto de uma divisão de um número por 2.
// Para que tipos de números ele imprime no console "Passou no teste"? 
// Resposta: Imprimirá os números de tipo par.
// Para que tipos de números a mensagem é "Não passou no teste"? 
// Resposta: Imprimirá os números de tipo ímpar.

// EXERCÍCIO 2
// a) 
// Server para verificar o preço de acordo com a fruta informada
// b)
// O preço da fruta Maçã é R$ 2,25
// c)
// O preço da fruta Pêra é R$ 5

// EXERCÍCIO 3
// a)
// Criando ua variável constante e armazenando uma insteração com o usuráio pelo prompt, fazendo um cast de string para number.
// b)
// se o número for 10, vai imprimir: Essa mensagem é secreta!!! Se for -10, não imprimirá nada. Pois a let mensagem vai ser undefined.
// c)
// Sim. A atribuição da mensagem está em escopo local e, não atendendo a condição, o console retornará undefined, por que a mensagem está sendo invocada no escopo global onde não tem nada armazenado/definido caso a condição não retone verdadeira.


// Exercícios de escrita de código
// EXERCÍCIO 4
// 1.
// let age = prompt('Informe sua idade:')
// // 2.
// age = Number(prompt('Informe sua idade:'))
// // 3.
// if (age >=18) {
//     console.log('Você pode dirigir')
// } else { console.log('Você não pode dirigir')}

// EXERCÍCIO 5
// let turno = prompt('Informe o turno que você estuda, sendo M para matutino, V para vespertino e N para noturno:  ')
// if (turno === 'M') {
//     console.log('Bom dia!')
// } else if (turno === 'V') {
//     console.log('Boa tarde!')
// } else if  (turno === 'N') {
//     console.log('Boa noite!')
// } else {
//     console.log('Favor informar apenas uma das opções: M, V ou N.')
// }

// EXERCÍCIO 6
// let turno = prompt('Informe o turno que você estuda, sendo M para matutino, V para vespertino e N para noturno:  ')
// switch (turno) {
//     case 'M':
//     console.log('Bom dia!')
//     break
//     case 'V':
//     console.log('Boa tarde!')
//     break
//     case 'N':
//     console.log('Boa noite!')
//     break
//     default:
//     console.log('Favor informar apenas uma das opções: M, V ou N.')
//     break
// }

// EXERCÍCIO 7
// let genre = prompt('Informe o gênero do filme que deseja assistir:')
// let ticket = Number(prompt('Informe o valor que ingresso que pretendo pagar:'))

// if (genre === 'fantasia' && ticket >=0 && ticket <= 15) {
//     console.log('Bom filme!')
// } else { console.log('Escolha outro filme :(')}

// DESAFIOS
// 1.

// let genre = prompt('Informe o gênero do filme que deseja assistir:')
// let ticket = Number(prompt('Informe o valor que ingresso que pretendo pagar:'))

// if (genre === 'fantasia' && ticket >=0 && ticket <= 15) {
//     let snack = prompt('Qual snack quer comprar? Chocolote, pipoca ou milkshake?')
//     console.log('Bom filme! ...com',snack)
// } else { console.log('Escolha outro filme :(')}

// 2.
const client = prompt('Informe seu nome completo por favor:')
let typeMatch = prompt('Informe o tipo de partida que deseja assistir, sendo IN para internacional e DO para doméstico:')
let gameStage = prompt('Informe qual etapa do jogo deseja adquirir os ingressos, sendo SF para semi-final; DT para decisão de terceiro lugar; e FI para final:')
let category = prompt('Informe o tipo de categoria que deseja adquirir os ingressos, sendo 1 para primeira fila, 2, 3 e 4 para segunda, terceira e última fila:')
let ticket = Number(prompt('Informe quanto ingressos você deseja comprar:'))
let price
let total = price*ticket

if (typeMatch === 'DO' && gameStage === 'SF') {
    switch (category) {
    case "1":
    price = 1320
    break;
    case "2":
    price = 880
    break;
    case "3":
    price = 550
    break;
    case "4":
    price = 220
    break;
    }
}

if (typeMatch === 'DO' && gameStage === 'DT') {
    switch (category) {
    case "1":
    price = 660
    break;
    case "2":
    price = 440
    break;
    case "3":
    price = 330
    break;
    case "4":
    price = 170
    break;
    }
}

if (typeMatch === 'DO' && gameStage === 'FI') {
    switch (category) {
    case "1": 
    price = 1980
    break;
    case "2": 
    price = 1320
    break;
    case "3":
    price =  880
    break;
    case "4":
    price =  330
    break;
    }
}

if (typeMatch === 'IN' && gameStage === 'SF') {
    let dollar = 4.1
    switch (category) {
    case "1":
    price = 1320*dollar
    break;
    case "2":
    price = 880*dollar
    break;
    case "3":
    price = 550*dollar
    break;
    case "4":
    price = 220*dollar
    break;
    }
}

if (typeMatch === 'IN' && gameStage === 'DT') {
    let dollar = 4.1
    switch (category) {
    case "1":
    price = 660*dollar
    break;
    case "2":
    price = 440*dollar
    break;
    case "3":
    price = 330*dollar
    break;
    case "4":
    price = 170*dollar
    break;
    }
}

if (typeMatch === 'IN' && gameStage === 'FI') {
    let dollar = 4.1
    switch (category) {
    case "1": 
    price = 1980*dollar
    break;
    case "2": 
    price = 1320*dollar
    break;
    case "3":
    price =  880*dollar
    break;
    case "4":
    price =  330*dollar
    break;
    }
}
