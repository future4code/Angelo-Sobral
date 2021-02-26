// DESAFIO 1

//  console.log('Bem-vindo(a) ao jogo Blackjack!')

//   let newGame = true
  
//   while(newGame) {

//   if (newGame = !confirm('Quer iniciar uma nova rodada?')) {
//     console.log('Ok! O jogo acabou!')
//     newGame = false
//  } else {
//     const card1User = comprarCarta()
//     const card2User = comprarCarta()
//     let totalUser = card1User.valor + card2User.valor 
    
//     const card1AI = comprarCarta()
//     const card2AI = comprarCarta()
//     let totalAI = card1AI.valor + card2AI.valor

//     console.log(`Usuário - cartas: ${card1User.texto} ${card2User.texto} - pontuação ${totalUser}`)
//     console.log(`Usuário - cartas: ${card1AI.texto} ${card2AI.texto} - pontuação ${totalAI}`)

//     if (totalUser === totalAI) {
//        console.log('Empate!')
//     } else if (totalUser > totalAI) {
//       console.log('O usuário ganhou!')
//     } else {
//       console.log('O computador ganhou!')
//     }
//     newGame = true
//  }

// }


// DESAFIO 2

console.log('Bem-vindo(a) ao jogo Blackjack!')

const playerCards = []

const aiCards = []

let newGame = true

while(newGame) {

if (newGame = !confirm('Quer iniciar uma nova rodada?')) {
  console.log('Ok! O jogo acabou!')
  newGame = false
} else {
  const card1User = comprarCarta()
  playerCards.push(card1User)
  const card2User = comprarCarta()
  playerCards.push(card2User)
  let totalUser = card1User.valor + card2User.valor 
  
  const card1AI = comprarCarta()
  aiCards.push(card1AI)
  const card2AI = comprarCarta()
  aiCards.push(card2AI)
  let totalAI = card1AI.valor + card2AI.valor

  let countA = true

   while (countA) {

   if (playerCards[0].valor === 11 && playerCards[1].valor === 11 || aiCards[0].valor === 11 && aiCards[0].valor === 11) {
      countA = true
   } else { countA = false}

  }

  console.log(`Usuário - cartas: ${card1User.texto} ${card2User.texto} - pontuação ${totalUser}`)
  console.log(`Usuário - cartas: ${card1AI.texto} ${card2AI.texto} - pontuação ${totalAI}`)

  if (totalUser === totalAI) {
     console.log('Empate!')
  } else if (totalUser > totalAI) {
    console.log('O usuário ganhou!')
  } else {
    console.log('O computador ganhou!')
  }
  newGame = true
}

}