/**
 * Función para determinar el ganador
 * @param {Array<number>} puntosJugadores. Los puntos del Jugador/Ordenador
 * @returns {number} Devuelve un número para evaluar el ganador
 */
export const determinarGanador = (puntosJugadores) => {
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
