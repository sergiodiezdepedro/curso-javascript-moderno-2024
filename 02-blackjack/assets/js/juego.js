// * 2C = Two of Clubs (Tréboles)
// * 2D = Two of Diamonds (Diamantes)
// * 2H = Two of Hearts (Corazones)
// * 2S = Two of Spades (Picas)
// * A, J, Q, K

(() => {
  "use strict";
  
  let deck = [];
  const tipos = ["C", "D", "H", "S"];
  const especiales = ["A", "J", "Q", "K"];
  let puntosJugador = 0;
  let puntosOrdenador = 0;

  // ? Referencias del HTML
  const btnPedir = document.querySelector("#btnPedir");
  const btnPlantarse = document.querySelector("#btnPlantarse");
  const btnNuevapartida = document.querySelector("#btnNuevaPartida");
  const puntosHTML = document.querySelectorAll("small");
  const divCartasJugador = document.querySelector("#jugador-cartas");
  const divCartasOrdenador = document.querySelector("#ordenador-cartas");

  // ? Función para crear una nueva baraja
  const crearDeck = () => {
    for (let i = 2; i <= 10; i++) {
      for (let tipo of tipos) {
        deck.push(i + tipo);
      }
    }

    for (let tipo of tipos) {
      for (let especial of especiales) {
        deck.push(especial + tipo);
      }
    }

    deck = _.shuffle(deck);
    // console.log(deck);
    return deck;
  };

  crearDeck();

  // ? Función para pedir una carta
  const pedirCarta = () => {
    if (deck.length === 0) {
      throw "No hay cartas en la baraja";
    }
    const carta = deck.pop();
    return carta;
  };

  pedirCarta();

  // ? Función para determinar el valor de la carta
  const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
  };

  // ? Turno del Ordenador
  const turnoOrdenador = (puntosMinimos) => {
    do {
      const carta = pedirCarta();
      puntosOrdenador = puntosOrdenador + valorCarta(carta);
      puntosHTML[1].innerText = puntosOrdenador;
      const imgCarta = document.createElement("img");
      imgCarta.src = `assets/cartas/${carta}.png`;
      imgCarta.alt = "Carta del Ordenador";
      imgCarta.classList.add("carta");
      divCartasOrdenador.append(imgCarta);

      if (puntosMinimos > 21) {
        break;
      }
    } while (puntosOrdenador < puntosMinimos && puntosMinimos <= 21);

    setTimeout(() => {
      if (puntosOrdenador === puntosMinimos) {
        alert("Empate, pero el Ordenador gana en este caso");
      } else if (puntosMinimos > 21) {
        alert("Te pasaste. Lo siento, perdiste");
      } else if (puntosOrdenador > 21) {
        alert("Ganaste. El Ordenador se pasó");
      } else {
        alert("El Ordenador gana");
      }
    }, 20);
  };

  // ? Eventos
  btnPedir.addEventListener("click", () => {
    const carta = pedirCarta();
    puntosJugador = puntosJugador + valorCarta(carta);
    puntosHTML[0].innerText = puntosJugador;
    const imgCarta = document.createElement("img");
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.alt = "Carta del Jugador Humano";
    imgCarta.classList.add("carta");
    divCartasJugador.append(imgCarta);

    if (puntosJugador > 21) {
      console.warn("Lo siento mucho, perdiste");
      btnPedir.disabled = true;
      btnPlantarse.disabled = true;
      turnoOrdenador(puntosJugador);
    } else if (puntosJugador === 21) {
      console.warn("Has obtenido 21. Genial");
      btnPedir.disabled = true;
      btnPlantarse.disabled = true;
      turnoOrdenador(puntosJugador);
    }
  });

  btnPlantarse.addEventListener("click", () => {
    btnPedir.disabled = true;
    btnPlantarse.disabled = true;
    turnoOrdenador(puntosJugador);
  });

  btnNuevapartida.addEventListener("click", () => {
    deck = [];
    deck = crearDeck();
    puntosJugador = 0;
    puntosOrdenador = 0;
    puntosHTML[0].innerHTML = 0;
    puntosHTML[1].innerHTML = 0;
    divCartasOrdenador.innerHTML = "";
    divCartasJugador.innerHTML = "";
    btnPedir.disabled = false;
    btnPlantarse.disabled = false;
  });
})();
