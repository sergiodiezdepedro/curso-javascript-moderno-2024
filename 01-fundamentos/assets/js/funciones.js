function saludar(nombre) {
  // console.log( arguments );
  //   console.log('Hola ' + nombre );
  //   return 10
  return [1, 2, 3, 4, 5];

  // ? Esto nunca se va a ejecutar
  console.log("Soy un código que está después del return");
}

const retornoDeSaludar = saludar("pezhammer", 40, true, "España");
console.log({ retornoDeSaludar });

// saludar("Jane Walker");

const saludar2 = function (nombre) {
  console.log("Hola " + nombre);
};

// saludar2("Joe Smith");

const saludarFlecha = () => {
  console.log("Hola Flecha");
};

const saludarFlecha2 = (nombre) => {
  console.log("Hola " + nombre);
};

// saludarFlecha();
// saludarFlecha2('Melissa');

function sumar(a, b) {
  return a + b;
}
console.log("Suma:", sumar(90, 10));

// ? En las funciones de flecha, si el return es la única línea entre llaves, se puede resumir toda la función en una única línea, como se muestra en 'sumar2'
// const sumar2 = (a,b) => {
//     return a + b;
// }
const sumar2 = (a, b) => a + b;

function getAleatorio() {
  return Math.random();
}
console.log("Aleatorio 1:", getAleatorio());

const getAleatorio2 = () => Math.random();

console.log("Aleatorio 2:", getAleatorio2());
