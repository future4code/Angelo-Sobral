// Exercício interpretação de código:
// 1. console.log(b) vai ser 10; console.log(a,b) vai ser 10,5

// 2. console.log(a, b, c) vai ser 10, 10, 10

// Exercício escrita de código:
// 1.
// a)
let nome
//b)
let idade
//c)
console.log(typeof nome)
console.log(typeof idade)
// d)
// Deu undefined por que não foi definido nenhuma valor para variável.
nome = prompt('Qual seu nome?')
idade = prompt('Qual sua idade?')
// e)
console.log(typeof nome)
console.log(typeof idade)
// retornou tipo string/cadeia de caracteres, pois todo valor atribuído pelo prompt gera uma string/cadeia de caracteres
// f)
console.log('Olá', nome, 'você tem', idade, 'anos')

// 2.
let cidade = prompt('Em qual cidade mora?')
console.log('Em qual cidade mora?', 'Resposta:', cidade)

let estado = prompt('Em qual estado nasceu?')
console.log('Em qual estado nasceu?', 'Resposta:', estado)

let estadoCivil = prompt('Qual seu estado civil?')
console.log('Qual seu estado civil?', 'Resposta:', estadoCivil)

let pet = prompt('Você tem pets?')
console.log('Você tem pets?', 'Resposta:', pet)

let cor = prompt('Qual sua cor favorita?')
console.log('Qual sua cor favorita?', 'Resposta:', cor)

// 3.
let comidas = ['Lasanha','Feijoada','Temaki','Cuscuz','Moqueca']

// a) 
console.log(comidas)
console.log('Essas são as minhas comidas preferidas:')
console.log(comidas[0])
console.log(comidas[1])
console.log(comidas[2])
console.log(comidas[3])
console.log(comidas[4])

let comidaUsuario = prompt('E você? Qual sua comida favorita?')
console.log('Usuário responde:', comidaUsuario)

comidas = ['Lasanha',comidaUsuario,'Temaki','Cuscuz','Moqueca']

console.log(comidas)

// 4.
let perguntas = ['Já almoçou?', 'Já teminou o exercício?', 'Já bebeu água hoje?']
// a) 
let respostas = [true, false, true]
//b )
console.log(perguntas[0], respostas[0])
console.log(perguntas[1], respostas[1])
console.log(perguntas[2], respostas[2])
