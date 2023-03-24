/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

function jogoBlackJack() {


   let pergunta = confirm(`Boas vindas ao jogo de BlackJack! 
Quer iniciar uma nova rodada?`)


   if (pergunta) {

      let jogoUser = [comprarCarta(), comprarCarta()]
      let jogoComputador = [comprarCarta(), comprarCarta()]

      //Comprar nova rodada CASO FOR DOIS ACES
      if ((jogoUser[0].valor === 11 && jogoUser[1].valor === 11) || (jogoComputador[0].valor === 11 && jogoComputador[1].valor === 11)) {

         jogoUser = [comprarCarta(), comprarCarta()]
         jogoComputador = [comprarCarta(), comprarCarta()]

      } else {

         //Inicia rodada Usuário

         let calc21User = jogoUser[0].valor + jogoUser[1].valor
         let calc21Computador = jogoComputador[0].valor + jogoComputador[1].valor

         console.log(calc21User, calc21Computador)

         let pergunta = confirm(
            `Suas cartas são: ${jogoUser[0].texto} ${jogoUser[1].texto}. A carta revelada do computador é ${jogoComputador[0].texto}.
Deseja comprar mais uma carta?`

         )

         if (pergunta) {

            const novaCarta = comprarCarta()
            jogoUser.push(novaCarta)
            calc21User += novaCarta.valor

            console.log(calc21User)

            const textoCartasUser = jogoUser.map(carta => carta.texto).join(' ')
            const textoCartasComputador = jogoComputador.map(carta => carta.texto).join(' ')

            if(calc21User > 21){

               let mensagemFinal = `Usuário - Cartas: ${textoCartasUser} - Pontuação: ${calc21User}.
Computador - Cartas: ${textoCartasComputador} - Pontuação: ${calc21Computador}.`
            
                           alert(`${mensagemFinal}\nO computador ganhou!`)

            } else{
               let pergunta = confirm(
                  `Suas cartas são: ${textoCartasUser}. A carta revelada do computador é ${jogoComputador[0].texto}.
Deseja comprar mais uma carta?`
   
               )
               
               
               if(calc21User  <= 21 && pergunta){
   
                  let cartaExtra = true
   
               while (calc21User <= 21 && cartaExtra) {
   
                  const mensagem = `Suas cartas são: ${textoCartasUser}. A carta revelada do computador é ${jogoComputador[0].texto}.\nDeseja comprar mais uma carta?`
   
                  cartaExtra = confirm(mensagem)
   
                  if (cartaExtra) {
   
                     const novaCarta = comprarCarta()
                     jogoUser.push(novaCarta)
                     calc21User += novaCarta.valor
   
                  }
               }
   
               //Turno do computador comprar as cartas
   
               while (calc21Computador < calc21User && calc21User <= 21) {
   
                  const novaCarta = comprarCarta()
                  jogoComputador.push(novaCarta)
                  calc21Computador += novaCarta.valor
               }
   
               let mensagemFinal = `Usuário - Cartas: ${textoCartasUser} - Pontuação: ${calc21User}.
Computador - Cartas: ${textoCartasComputador} - Pontuação: ${calc21Computador}.`
   
   
               // Comparações de resultados
               if (calc21User > 21) {
                  alert(`${mensagemFinal}
O computador ganhou!`)
               } else if (calc21Computador > 21) {
                  alert(`${mensagemFinal}
O usuário ganhou!`)
               } else if (calc21User > calc21Computador) {
                  alert(`${mensagemFinal}
O usuário ganhou!`)
               } else if (calc21Computador > calc21User) {
                  alert(`${mensagemFinal}
O computador ganhou!`)
               } else {
                  alert(`${mensagemFinal}
O jogo empatou!`)
               }
   
   
               } 
               
            }

            


         } else {
            const textoCartasUser = jogoUser.map(carta => carta.texto).join(' ')
            const textoCartasComputador = jogoComputador.map(carta => carta.texto).join(' ')

            let calc21User = jogoUser[0].valor + jogoUser[1].valor
            let calc21Computador = jogoComputador[0].valor + jogoComputador[1].valor

            const mensagemFinal = `Usuário - Cartas: ${textoCartasUser} - Pontuação: ${calc21User}
Computador - Cartas: ${textoCartasComputador} - Pontuação: ${calc21Computador}`

            if (calc21User < calc21Computador) {
               alert(`${mensagemFinal} 
O computador ganhou!`)

            } else if (calc21User > calc21Computador) {
               alert(`${mensagemFinal} 
O usuário ganhou!` )

            } else if (calc21Computador === calc21User) {
               alert(`${mensagemFinal} 
Deu empaate!` )
            }

         }

      }


   }

   else {

      // Quando clicar em CANCEL na primeira mensagem do resultado


      alert(`Fim de jogo!`)
   }
}

jogoBlackJack()