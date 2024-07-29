// * 2C = Two of Clubs (Tréboles)
// * 2D = Two of Diamonds (Diamantes)
// * 2H = Two of Hearts (Corazones)
// * 2S = Two of Spades (Picas)
// * A, J, Q, K

let deck = [];
const tipos = ["C", "D", "H", "S"];
const especiales = ["A", "J", "Q", "K"];
let puntosJugador = 0;
let puntosOrdenador = 0;

// ? Referencias del HTML
const btnPedir = document.querySelector("#btnPedir");
const puntosHTML = document.querySelectorAll("small");
const divCartasJugador = document.querySelector("#jugador-cartas");

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
  } else if (puntosJugador === 21) {
    console.warn("Has obtenido 21. Genial");
    btnPedir.disabled = true;
  }
});
