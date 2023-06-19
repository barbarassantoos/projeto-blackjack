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

   //  console.log("Boas vindas ao jogo!");
   //  let cartasUsuario = [];
   //  let cartasComputador = [];
    
   //  if (confirm("Deseja jogar?")) {
   //    let validaCarta = false;
   //    while (!validaCarta) {
   //      cartasUsuario.push(comprarCarta(), comprarCarta());
   //      cartasComputador.push(comprarCarta(), comprarCarta());
   //      if (
   //        (cartasUsuario[0].texto.includes('A') && cartasUsuario[1].texto.includes('A')) ||
   //        (cartasComputador[0].texto.includes('A') && cartasComputador[1].texto.includes('A'))
   //      ) {
   //        cartasUsuario = [];
   //        cartasComputador = [];
   //      } else {
   //        validaCarta = true;
   //      }
   //    }
    
   //    const segundoConfirm = confirm(
   //      `Suas cartas são ${cartasUsuario[0].texto} ${cartasUsuario[1].texto}. As cartas do computador são ${cartasComputador[0].texto} .\nDeseja comprar mais uma carta?`
   //    );
    
   //    if (segundoConfirm) {
   //      cartasUsuario.push(comprarCarta());
   //    } else {
   //      const pontuacaoUsuario = somaCartas(cartasUsuario);
   //      const pontuacaoComputador = somaCartas(cartasComputador);
    
   //      if (pontuacaoUsuario > pontuacaoComputador) {
   //        alert(`Usuário venceu!`);
   //      } else if (pontuacaoUsuario < pontuacaoComputador) {
   //        alert(`Computador venceu!`);
   //      } else {
   //        alert(`Empate!`);
   //      }
   //    }
    
   //    function somaCartas(cartas) {
   //      let pontuacaoTotal = 0;
   //      for (let i = 0; i < cartas.length; i++) {
   //        pontuacaoTotal += cartas[i].valor;
   //      }
   //      return pontuacaoTotal;
   //    }
    
   //    if (somaCartas(cartasUsuario) < 21) {
   //      const terceiroConfirm = confirm(`Agora suas cartas são ${cartasUsuario.map(carta => carta.texto).join(', ')}. A nova carta do computador é ${cartasComputador[0].texto}.\nDeseja comprar uma última carta?`);
    
   //      if (!terceiroConfirm) {
   //        const pontuacaoUsuario = somaCartas(cartasUsuario);
   //        const pontuacaoComputador = somaCartas(cartasComputador);
    
   //        if (pontuacaoUsuario > pontuacaoComputador) {
   //          alert(`Usuário venceu!`);
   //        } else if (pontuacaoUsuario < pontuacaoComputador) {
   //          alert(`Computador venceu!`);
   //        } else {
   //          alert(`Empate!`);
   //        }
   //      } else {
   //        cartasUsuario.push(comprarCarta());
   //        const pontuacaoUsuario = somaCartas(cartasUsuario);
   //        const pontuacaoComputador = somaCartas(cartasComputador);
    
   //        if (pontuacaoUsuario > pontuacaoComputador) {
   //          alert(`Usuario - Cartas: ${cartasUsuario[0].texto} ${cartasUsuario[1].texto} Pontuação: ${somaUsuario()}
   //          Computador - Cartas ${cartasComputador[0].texto} ${cartasComputador[1].texto} Pontuação ${somaComputador()}
   //          O Computador ganhou!!`);
   //        } else if (pontuacaoUsuario < pontuacaoComputador) {
   //          alert(`Usuario - Cartas: ${cartasUsuario[0].texto} ${cartasUsuario[1].texto} Pontuação: ${somaUsuario()}
   //          Computador - Cartas ${cartasComputador[0].texto} ${cartasComputador[1].texto} Pontuação ${somaComputador()}
   //          O usuário ganhou!`);
   //        } else {
   //          alert(`Usuario - Cartas: ${cartasUsuario[0].texto} ${cartasUsuario[1].texto} Pontuação: ${somaUsuario()}
   //          Computador - Cartas ${cartasComputador[0].texto} ${cartasComputador[1].texto} Pontuação ${somaComputador()}
   //          Empate!`);
   //        }
   //       }
   //    }
   //  } else {
   //    console.log("O jogo acabou");
   //  }
   console.log("Boas vindas ao jogo!");
   let cartasUsuario = [];
   let cartasComputador = [];
   
   if (confirm("Deseja jogar?")) {
     let validaCarta = false;
     while (!validaCarta) {
       cartasUsuario.push(comprarCarta());
       cartasUsuario.push(comprarCarta());
       cartasComputador.push(comprarCarta());
       cartasComputador.push(comprarCarta());
       if (
         (cartasUsuario[0].texto.includes('A') && cartasUsuario[1].texto.includes('A')) ||
         (cartasComputador[0].texto.includes('A') && cartasComputador[1].texto.includes('A'))
       ) {
         cartasUsuario = [];
         cartasComputador = [];
       } else {
         validaCarta = true;
       }
     }
   
     const segundoConfirm = confirm(
       `Suas cartas são ${cartasUsuario[0].texto} ${cartasUsuario[1].texto}. A carta do computador é ${cartasComputador[0].texto}.\nDeseja comprar mais uma carta?`
     );
   
     if (segundoConfirm) {
       cartasUsuario.push(comprarCarta());
     } else {
       const pontuacaoUsuario = somaCartas(cartasUsuario);
       const pontuacaoComputador = somaCartas(cartasComputador);
   
       if (pontuacaoUsuario > pontuacaoComputador) {
         alert(`Usuário venceu!`);
       } else if (pontuacaoUsuario < pontuacaoComputador) {
         alert(`Computador venceu!`);
       } else {
         alert(`Empate!`);
       }
     }
   
     function somaCartas(cartas) {
       let pontuacaoTotal = 0;
       for (let i = 0; i < cartas.length; i++) {
         pontuacaoTotal += cartas[i].valor;
       }
       return pontuacaoTotal;
     }
   
     if (somaCartas(cartasUsuario) < 21) {
       const terceiroConfirm = confirm(`Agora suas cartas são ${cartasUsuario.map(carta => carta.texto).join(', ')}. A nova carta do computador é ${cartasComputador[0].texto}.\nDeseja comprar uma última carta?`);
   
       if (!terceiroConfirm) {
         const pontuacaoUsuario = somaCartas(cartasUsuario);
         const pontuacaoComputador = somaCartas(cartasComputador);
   
         if (pontuacaoUsuario > pontuacaoComputador) {
           alert(`Usuário venceu!`);
         } else if (pontuacaoUsuario < pontuacaoComputador) {
           alert(`Computador venceu!`);
         } else {
           alert(`Empate!`);
         }
       } else {
         cartasUsuario.push(comprarCarta());
         const pontuacaoUsuario = somaCartas(cartasUsuario);
         const pontuacaoComputador = somaCartas(cartasComputador);
   
         if (pontuacaoUsuario > pontuacaoComputador) {
           alert(`Usuário - Cartas: ${cartasUsuario[0].texto} ${cartasUsuario[1].texto} Pontuação: ${pontuacaoUsuario}
   Computador - Cartas: ${cartasComputador[0].texto} ${cartasComputador[1].texto} Pontuação: ${pontuacaoComputador}
   O Computador ganhou!!`);
         } else if (pontuacaoUsuario < pontuacaoComputador) {
           alert(`Usuário - Cartas: ${cartasUsuario[0].texto} ${cartasUsuario[1].texto} Pontuação: ${pontuacaoUsuario}
   Computador - Cartas: ${cartasComputador[0].texto} ${cartasComputador[1].texto} Pontuação: ${pontuacaoComputador}
   O usuário ganhou!`);}

   else if( pontuacaoUsuario===21){
      alert (`Usuário - Cartas: ${cartasUsuario[0].texto} ${cartasUsuario[1].texto} Pontuação: ${pontuacaoUsuario}
      Computador - Cartas: ${cartasComputador[0].texto} ${cartasComputador[1].texto} Pontuação: ${pontuacaoComputador}
      O usuário ganhou!`)
   }
   else if (pontuacaoComputador===21){
      alert (`Usuário - Cartas: ${cartasUsuario[0].texto} ${cartasUsuario[1].texto} Pontuação: ${pontuacaoUsuario}
      Computador - Cartas: ${cartasComputador[0].texto} ${cartasComputador[1].texto} Pontuação: ${pontuacaoComputador}
      O Computador ganhou!!`)}
   
         else {
           alert(`Usuário - Cartas: ${cartasUsuario[0].texto} ${cartasUsuario[1].texto} Pontuação: ${pontuacaoUsuario}
   Computador - Cartas: ${cartasComputador[0].texto} ${cartasComputador[1].texto} Pontuação: ${pontuacaoComputador}
   Empate!`);
         }
       }
     }
    else {
     console.log("O jogo acabou");
   }
}
