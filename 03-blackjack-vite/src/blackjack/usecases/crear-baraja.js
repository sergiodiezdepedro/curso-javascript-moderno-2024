import _ from "underscore";

/**
 * Esta función crea una nueva baraja
 * @param {Array<string>} tiposdeCarta Palos de la baraja: ["C", "D", "H", "S"]
 * @param {Array<string>} tiposEspeciales Cartas especiales: ["A", "J", "Q", "K"]
 * @returns {Array<string>} Devuelve una nueva baraja
 */

export const crearDeck = (tiposdeCarta, tiposEspeciales) => {
  if (!tiposdeCarta || tiposdeCarta.length === 0)
    throw new Error("tiposDeCarta es obligatorio como un array de strings");

  if (!tiposEspeciales || tiposEspeciales.length === 0)
    throw new Error("tiposEspeciales es obligatorio como un array de strings");

  let deck = [];
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposdeCarta) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tiposdeCarta) {
    for (let especial of tiposEspeciales) {
      deck.push(especial + tipo);
    }
  }
  return _.shuffle(deck);
};

// export default crearDeck;
