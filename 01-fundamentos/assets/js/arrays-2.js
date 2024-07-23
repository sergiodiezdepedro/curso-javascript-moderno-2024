let gameBoards = ["Anachrony", "Doggerland", "Arkham Horror", "Scythe"];

// console.log(`Longitud: ${gameBoards.length}`);

let primero = gameBoards[0];
let ultimo = gameBoards[gameBoards.length - 1];
// console.log(primero, ultimo);

gameBoards.forEach((elemento, indice, arr) => {
  // console.log({elemento, indice, arr})
});

// ? Añade un nuevo elemento al array al final
let nuevaLongitud = gameBoards.push("Trickerion");
console.log({ nuevaLongitud, gameBoards });
// ? Añade un nuevo elemento al array al principio
nuevaLongitud = gameBoards.unshift("Agricola");
console.log({ nuevaLongitud, gameBoards });
// ? Elimina el último elemento del array
let juegoBorrado = gameBoards.pop();
console.log({ juegoBorrado, gameBoards });
// ? Elimina n elementos (el segundo argumento del método) a partir de una posición)
let borrarDesdeUnaPosicion = 1;
let juegosBorrados = gameBoards.splice(borrarDesdeUnaPosicion, 2);
console.log({ juegosBorrados, gameBoards });

// ? Así se encuentra el índice de un elemento de un array. La búsqueda es literal y case sensitive. Si no encuentra el elemento devuelve '-1'
let arkhamIndex = gameBoards.indexOf("Arkham Horror");
console.log({ arkhamIndex });
