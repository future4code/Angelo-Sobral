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

let playerCards = []
let mainHand = []
let totalUser = 0

let aiCards = []
let mainHandAI = []
let totalAI = 0

/////////////////////// loop para verificar se o jogador quer iniciar uma nova rodada /////////////////

let newGame = true

while(newGame) {

////////////// se o confirm retornar não true(ou seja false) o jogo acaba //////////////

if (newGame = !confirm('Quer iniciar uma nova rodada?')) {
  console.log('Ok! O jogo acabou!')
  newGame = false
} else {

//////////////////////// se votar um não false (ou seja true) gera uma nova rodada ///////////////////

  let card1User = comprarCarta()
  let card2User = comprarCarta()
  
  let card1AI = comprarCarta()
  let card2AI = comprarCarta()
  
  let countA = true

   while (countA) {

///////////////// verificação para sabe se um jogador recebeu dois ases /////////////////

   if (card1User.valor === 11 && card2User.valor === 11 || card1AI.valor === 11 && card2AI.valor === 11) {
      console.log('Um dos jogadores começaram com dois ases. Serão distribuídas novas cartas.')
      
///////////// se sim, gera novas cartas. Não dei push por que se gerasse novas cartas com dois ases de novo o push ficaria acomulado no array  /////////////////////////

      card1User = comprarCarta()
      card2User = comprarCarta()
      card1AI = comprarCarta()
      card2AI = comprarCarta()

   } else {
      playerCards.push(card1User)
      playerCards.push(card2User)
      aiCards.push(card1AI)
      aiCards.push(card2AI)
      countA = false}
  }

///////////////////////Vericação de array vazio caso tenha 2 ases/////////////////////////////
  
  if (playerCards === []) {
   playerCards.push(card1User)
   playerCards.push(card2User)
  } else if (aiCards === []) {
   aiCards.push(card1AI)
   aiCards.push(card2AI)
  }

//////////////// loops para adiciona os valores para pontuação e os texto para nome/numero e naipe das cartas////////////////

  for (i=0; i < playerCards.length; i++) {
   playerCards[i]
   totalUser += playerCards[i].valor
  }

  for (i=0; i < playerCards.length; i++) {
   playerCards[i]
   mainHand.push(playerCards[i].texto)
}

for (i=0; i < aiCards.length; i++) {
   aiCards[i]
   totalAI += aiCards[i].valor
}

for (i=0; i < aiCards.length; i++) {
   aiCards[i]
   mainHandAI.push(aiCards[i].texto)
}

//////////////// loop para verificar se o jogador quer comprar mais cartas /////////////////

   let buyNewCardUser = true
  
   while (totalUser <=21 && buyNewCardUser) {
      
      buyNewCardUser = confirm(`Suas cartas são: ${mainHand}. A carta revelada do oponente é ${card1AI.texto}.` + '\n' + `Deseja comprar mais cartas?`)

      if (buyNewCardUser) {
      let newCard = comprarCarta()
      playerCards.push(newCard)
      for (i = 2; i < playerCards.length;i++) {
         playerCards[i]
         totalUser += playerCards[i].valor
         console.log(totalUser)
         mainHand.push(playerCards[i].texto)
         console.log(mainHand)
      }
      }
   }
   console.log(totalUser)
   //////////////// loop para verificar se a AI quer comprar mais cartas coloquei <= 17 por que não achei justo comprar cartas enquanto fossem >= as do jogador. A probabilidade da AI perder seria maior /////////////////

   alert('Agora é a vez do oponente ver se quer mais cartas.')

      while (totalAI <= 17) {

      let newCardAI = comprarCarta()
      aiCards.push(newCardAI)
      for (i=2; i < aiCards.length; i++) {
         aiCards[i]
         totalAI += aiCards[i].valor
         mainHandAI.push(aiCards[i].texto)
      }
   }

   alert('Foi rápido né? Quem será que ganhou? Vamor ver!')
   console.log(totalUser)
//////////// verificações para condições de empate, vitória e derrotas //////////////////

  if (totalUser === totalAI) {
     alert(`Suas cartas são ${mainHand} . Sua pontuação é `, console.log(totalUser) ` ${totalUser}.\nAs cartas do computador são ${mainHandAI} . A pontuação do computador é ${totalAI}.\nDeu empate!`)
  } else if (totalUser <= 21 && totalAI > 21 || totalUser < totalAI && totalAI > 21 || (totalUser = 21)) {
     alert(`Suas cartas são ${mainHand} . Sua pontuação é ${totalUser}.\nAs cartas do computador são ${mainHandAI} . A pontuação do computador é ${totalAI}.\nVocê ganhou!`)
  } else {
     alert(`Suas cartas são ${mainHand} . Sua pontuação é ${totalUser}.\nAs cartas do computador são ${mainHandAI} . A pontuação do computador é ${totalAI}.\nO computador ganhou!`)
  }
  newGame = true

//////////// zerando os arrays e totais de pontos para quando iniciar uma nova rodada /////////////////

  playerCards = []
  aiCards = []
  mainHand = []
  mainHandAI = []
  totalUser = 0
  totalAI = 0
}
}