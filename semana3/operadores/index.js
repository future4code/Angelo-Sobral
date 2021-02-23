// Exercícios de interpretação de código
// 1.
// a) false
// b) false
// c) true
// d) boolean

// 2.
// a) undefined
// b) null
// c) 11
// d) 3
// e) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// f) 9

// Exercícios de escrita de código
// 1.
// a)
let ageUser = Number(prompt('Qual sua idade?'))
// b)
let ageBffUser = Number(prompt('Qual idade de seu melhor amigo(a)?'))
// c)
console.log('Sua iadade é maior que a do seu melhor amigo(a)?', ageUser > ageBffUser)
// d)
console.log('A diferença de idade é:', (ageUser - ageBffUser)*12, 'meses')

// 2.
// a)
let numPair = Number(prompt('Digite um número par:'))
// b) 
console.log(numPair % 2)
// c)
// todo resto de divisão de número par é 0
// d)
// o resto da divisão de número impar é 1

// 3.
// a)
let listaDeTarefas = []
// b)
let atividade1 = prompt('Lista 3 atividades que precisa fazer. Comece pela primeira:')
listaDeTarefas.push(atividade1)

let atividade2 = prompt('Informa a segunda atividade:')
listaDeTarefas.push(atividade2)

let atividade3 = prompt('Informa a terceira atividade:')
listaDeTarefas.push(atividade3)
// c)
console.log(listaDeTarefas)
// d)
let i = prompt('Remova uma das atividades de acordo com a ordem informada, digitando 1, 2 ou 3:')
// e)
listaDeTarefas.splice(i-1,1)
// f)
console.log(listaDeTarefas)

// 4.
let nameUser = prompt('Informe seu nome:')
let emailUser = prompt('Informe seu email:') 

console.log('O e-mail ' + emailUser + ' foi cadastrado com sucesso. Seja bem-vinda(o), ' + nameUser + '!')

