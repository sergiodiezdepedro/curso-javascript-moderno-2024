/**
 * Esta función permite que el jugador pida una carta
 * @param {Array<string>} deck es un array de strings
 * @returns {string} devuelve una carta de la baraja
 */

export const pedirCarta = (deck) => {
  if (!deck || deck.length === 0) {
    throw "No hay cartas en la baraja";
  }
  return deck.pop();
};
