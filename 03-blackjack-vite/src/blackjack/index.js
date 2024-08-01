import { crearDeck, crearCarta, pedirCarta, valorCarta } from "./usecases";
// import { crearDeck  as crearNuevoDeck } from "./usecases/crear-baraja";

// * 2C = Two of Clubs (Tréboles)
// * 2D = Two of Diamonds (Diamantes)
// * 2H = Two of Hearts (Corazones)
// * 2S = Two of Spades (Picas)
// * A, J, Q, K

let deck = [];
const tipos = ["C", "D", "H", "S"];
const especiales = ["A", "J", "Q", "K"];
let puntosJugadores = [];

// ? Referencias del HTML
const btnPedir = document.querySelector("#btnPedir");
const btnPlantarse = document.querySelector("#btnPlantarse");
const btnNuevapartida = document.querySelector("#btnNuevaPartida");
const puntosHTML = document.querySelectorAll("small");
const divCartasJugadores = document.querySelectorAll(".div-cartas");

// ? Función para inicializar el Juego
const inicializarJuego = (numJugadores = 2) => {
  deck = crearDeck(tipos, especiales);
  //deck = crearNuevoDeck(tipos, especiales);
  puntosJugadores = [];
  for (let i = 0; i < numJugadores; i++) {
    puntosJugadores.push(0);
  }
  puntosHTML.forEach((elem) => (elem.innerText = 0));
  divCartasJugadores.forEach((elem) => (elem.innerText = ""));

  btnPedir.disabled = false;
  btnPlantarse.disabled = false;
};

// ? Turno: 0: primer jugador y el último será el ordenador
const acumularPuntos = (carta, turno) => {
  puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
  puntosHTML[turno].innerText = puntosJugadores[turno];
  return puntosJugadores[turno];
};

const determinarGanador = () => {
  const [puntosMinimos, puntosOrdenador] = puntosJugadores;

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
  }, 1000);
};

// ? Turno del Ordenador
const turnoOrdenador = (puntosMinimos) => {
  let puntosOrdenador = 0;

  do {
    const carta = pedirCarta(deck);
    puntosOrdenador = acumularPuntos(carta, puntosJugadores.length - 1);
    crearCarta(carta, puntosJugadores.length - 1);
  } while (puntosOrdenador < puntosMinimos && puntosMinimos <= 21);

  determinarGanador();
};

// ? Eventos
btnPedir.addEventListener("click", () => {
  const carta = pedirCarta(deck);
  const puntosJugador = acumularPuntos(carta, 0);
  crearCarta(carta, 0);

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
  turnoOrdenador(puntosJugadores[0]);
});

btnNuevapartida.addEventListener("click", () => {
  inicializarJuego();
});
