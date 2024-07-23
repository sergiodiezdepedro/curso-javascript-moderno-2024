// ? Esta declaración es válida, pero poco común
// ? const arr = new Array(10);
// ? console.log(arr);

const arreglo = [];

let gameBoards = ["Anachrony", "Doggerland", "Arkham Horror", "Scythe"];
// console.log({ gameBoards });
// console.log(gameBoards[0]);

let arregloVariado = [
  true,
  123,
  "pezhammer",
  90 + 9,
  function () {},
  () => {},
  {
    a: 1,
    b: 2,
  },
  ["Benzema", "Kross", "Cristiano", "Hierro"],
];
console.log({ arregloVariado });
console.log(arregloVariado[7][3]);
