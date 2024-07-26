let string = "Peter Parker";

// ? No se puede volver a declarar la variable con 'let' en el mismo bloque
// ? let string = "Bruce Wayne";
// ? Esto sí es posible, porque se asigna un nuevo valor a la variable
string = "Bruce Wayne";

let otroString = `Mary Jane`;
// console.log(typeof otroString);

let boolean = false;

let number = 30;
number = 30.002;
// console.log(typeof number);

let sinDefinir;
// console.log(typeof sinDefinir);

let soyNull = null;
// ? El 'console.log' devuelve 'object' cuando se trata de un 'null'
// ? console.log(typeof soyNull)

let symbol1 = Symbol("a");
let symbol2 = Symbol("a");
console.log(typeof symbol1);
// ? Lo siguiente devuelve un 'false'
console.log(symbol1 === symbol2);
