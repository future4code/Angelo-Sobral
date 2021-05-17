// Exercício 2
const operator = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])

console.log('Resultado da operação!')

switch(operator){
    case "somar":
        console.log(num1 + num2)
        break;
    case "subtrair":
        console.log(num1 - num2)
        break;
    case "multiplicar":
        console.log(num1 * num2)
        break;
    case "dividir":
        console.log(num1 / num2)
        break;
    default:
        console.log("Desculpe, só realização as 4 operações básicas.")
}
