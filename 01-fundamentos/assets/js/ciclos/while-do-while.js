const coches = ["Seat", "Renault", "Volkswagen", "Citroen"];

let i = 0;

console.warn("while");
// while (i < coches.length) {
//   console.log(coches[i]);
//   i++;
// }

// ? El ciclo se interrumpe si devuelve 'undefined', 'null' o 'false'

// ? Lo mismo de antes, de forma más elegante, ya que el ciclo se interrumpirá cuando 'i' sea mayor que el número de elementos del array
// while (coches[i]) {
//   console.log(coches[i]);
//   i++;
// }

while (coches[i]) {
  if (i === 1) {
    break;
  }
  console.log(coches[i]);
  i++;
}

console.warn("Do while");

// ? La diferencia entre 'while' y 'do while' es que este ultimo se ejecuta al menos una vez

let j = 0;

do {
  console.log(coches[j]);
  j++;
} while (coches[j]);
