// declarando listas de cartas, seus valores e naipes.
const cartas = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
const naipes = ["♣️", "♥️", "♠️", "♦️"]
const valores = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11]

// deck vazio a ser preenchido com objetos
const deckBase = []

// concatenando todo mundo em objetos
for (i in naipes) {
  for (j in cartas) {
    deckBase.push({nome: cartas[j] + naipes[i], valor: valores[j]})
  }
}

// program to get a random item from an array >>>KIBEI DO PROGRAMIZ<<<
function getRandomItem(arr) {

  // get random index value
  const randomIndex = Math.floor(Math.random() * arr.length);

  // get random item
  const item = arr[randomIndex];

  return item;
}

// bem vindo, rato pustulento!
console.log('Bem vindo ao 21 do Cretino, meu pirilampo!')

// iniciar o jogo
function iniciaJogo() {
  let deckJogo = deckBase.slice() // copia o deck base pra remover cartas no jogo.
  let suaPontuacao = 0;
  let suaCarta = ''; // sua carta atual
  let suasCartas = [] // array de todas as suas cartas

  // função de comprar cartas
  function compraCarta() {
    suaCarta = getRandomItem(deckJogo);
    suaPontuacao += suaCarta.valor;
    suasCartas.push(suaCarta.nome)
    deckJogo = deckJogo.filter((carta) => carta.nome !== suaCarta.nome);
    return suaCarta
  }

  // carta da CPU
  let pontuacaoCPU = 0;
  let cartaCPU = ''; // carta atual da CPU
  let cartasCPU = [] // array das cartas da CPU

  // função de comprar carta da CPU
  function compraCPU() {
      cartaCPU = getRandomItem(deckJogo);
      pontuacaoCPU += cartaCPU.valor;
      cartasCPU.push(cartaCPU.nome)
      deckJogo = deckJogo.filter((carta) => carta.nome !== cartaCPU.nome);
      return cartaCPU
  }

  // Joga ou sarta de banda?
  let iniciando = confirm("Bem vindo ao 21 do Cretino, meu pirilampo!\nVai um joguinho aí, meu digníssimo?");

  if (iniciando) { // bora
    console.log("DEXA VOMIGO TOCA PO PAI");
    compraCarta()
    compraCarta()
    compraCPU()
    compraCPU()

    // dois A's na mão é falta, teje reiniciado.
    if (suaPontuacao === 22 || pontuacaoCPU === 22) {
      alert("OPA MEU AROMA DE GRAMA CORTADA, SAÍRAM DOIS A'S NO COMEÇO DO JOGO. BORA REINICIAR PORQUE ISSO AÍ É O FAMOSO TEJE PROIBIDO")
      iniciando
    }

    //continuar jogando?
    let continuarJogando = true

    while (continuarJogando && suaPontuacao < 22) {
      if (suaPontuacao > 21 || pontuacaoCPU > 21) { // se a pontuação estourar, o jogo para
        continuarJogando = false
      }
      continuarJogando = confirm(`Suas cartas são ${suasCartas}, sua pontuação é ${suaPontuacao}. A carta da CPU é ${cartasCPU[cartasCPU.length - 1]}.\nDeseja continuar, meu butijão  de gás cromado?`);
      if (continuarJogando) {
        compraCarta()
        if (pontuacaoCPU < 18 && cartasCPU.length < 6) { // CPU compra com as regras dela
            compraCPU()
        }
      } else {
        while (pontuacaoCPU < 18 && cartasCPU.length < 6) {
         compraCPU() // CPU compra com as regras dela independentemente do seu jogo
        }
         continuarJogando = false
      }
    }

    // fim do jogo e pontuação
    if ((suaPontuacao > pontuacaoCPU && suaPontuacao < 22) || (suaPontuacao < 22 && pontuacaoCPU > 21)) { // vitória
      console.log(`Você venceu, meu suflê de chuchu! Sua pontuação foi ${suaPontuacao} e a máquina fez ${pontuacaoCPU}.\nSuas cartas: ${suasCartas}. Cartas da máquina: ${cartasCPU}`);
      alert(`Você venceu, meu suflê de chuchu! Sua pontuação foi ${suaPontuacao} e a máquina fez ${pontuacaoCPU}.\nSuas cartas: ${suasCartas}. Cartas da máquina: ${cartasCPU}`);

    } else if (suaPontuacao === pontuacaoCPU && suaPontuacao < 22) { // empate
      alert(`OH NO IS EMPATE! Ambos fizeram ${suaPontuacao} pontos.\nSuas cartas: ${suasCartas}. Cartas da máquina: ${cartasCPU}`);
      console.log(`OH NO IS EMPATE! Ambos fizeram ${suaPontuacao} pontos.\nSuas cartas: ${suasCartas}. Cartas da máquina: ${cartasCPU}`);

    } else if ((suaPontuacao < pontuacaoCPU && pontuacaoCPU < 22) || (suaPontuacao > 21 && pontuacaoCPU < 22)) { // derrota
      alert(`VOSE E BURO PREDEU PRA MAQINA! ${suaPontuacao} contra ${pontuacaoCPU}.\nSuas cartas: ${suasCartas}. Cartas da máquina: ${cartasCPU}`);
      console.log(`VOSE E BURO PREDEU PRA MAQINA! ${suaPontuacao} contra ${pontuacaoCPU}.\nSuas cartas: ${suasCartas}. Cartas da máquina: ${cartasCPU}`);

    } else { // crime ocorre nada acontece feijoada
      alert(`TODO MUNDO PERDEU FODASE\nVocê fez ${suaPontuacao} e a CPU fez ${pontuacaoCPU}.\nSuas cartas: ${suasCartas}. Cartas da máquina: ${cartasCPU}`)
      console.log(`TODO MUNDO PERDEU FODASE\nVocê fez ${suaPontuacao} e a CPU fez ${pontuacaoCPU}.\nSuas cartas: ${suasCartas}. Cartas da máquina: ${cartasCPU}`);
    }

  } else { // recusar jogar
    alert(`Compreensível, tenha um ótimo dia.`)
    console.log(`Compreensível, tenha um ótimo dia.`)
  }

}

iniciaJogo()