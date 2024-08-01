/**
 * Función para dibujar las cartas en el DOM
 * @param {string} carta Recoge la carta de la baraja para dibujarla en el DOM
 * @param {Array<number>} turno Determina si se coloca en el espacio del Jugador/Ordenador
 * @returns {HTMLElement} Se dibuja la carta en el DOM
 */

export const crearCarta = (carta, turno) => {
  if(!carta) throw new Error ("La carta es un argumento obligatorio")
  const divCartasJugadores = document.querySelectorAll(".div-cartas");
  const imgCarta = document.createElement("img");
  imgCarta.src = `assets/cartas/${carta}.png`;
  imgCarta.alt = "Carta";
  imgCarta.classList.add("carta");
  divCartasJugadores[turno].append(imgCarta);
};
