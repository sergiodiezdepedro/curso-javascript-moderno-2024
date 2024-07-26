const regresaTrue = () => {
  console.log("Devuelve TRUE");
  return true;
};
const regresaFalse = () => {
  console.log("Devuelve FALSE");
  return false;
};

console.warn("Not o la negación");
console.log(!true); // false
console.log(!false); // true
console.log(!regresaFalse()); // true

console.warn("And"); // es true si todos los valores son verdaderos
console.log(true && true); // true
console.log(true && false); // false
console.log(true && !false); //true
console.log("4 condiciones:", true && true && true && false); // false
console.log("==============");
console.log(regresaFalse() && regresaTrue()); // false y retorna la función 'regresaFalse', ya que al ser falsa la primera premisa ya no continúa con la siguiente
console.log("======&&======");
regresaFalse() && regresaTrue(); // igual que en el ejemplo anterior. El resultado es false y sólo retorna la primera parte

console.warn("OR"); // true si una condición es verdadera, lo demás ya no importa
console.log(false || true); // true;
console.log(false || false); // false;
console.log("4 condiciones:", true || false || true || false); // true
console.log(regresaTrue() || regresaFalse()); // true. Devuelve la función 'regresaTrue'.
console.log(regresaFalse() || regresaTrue()); // true. Devuelve las dos funciones.

console.warn("Asignaciones");
const soyUndefined = undefined;
const soyNull = null;
const soyFalse = false;

const a1 = true && "Hola Mundo" && 150;
console.log({ a1 }); // Devuelve 150, el último valor
const a2 = "Hola Mundo" && false && 150;
console.log({ a2 }); // Devuelve false
const a3 = "Hola" && "Mundo";
console.log({ a3 }); // Devuelve Mundo
const a4 = "Hola" && soyFalse && "Mundo";

const a5 = soyFalse || "Ya no soy falso";
console.log({ a5 }); // Devuelve "Ya no soy falso"
const a6 =
  soyFalse || soyUndefined || soyNull || "Ya no soy falso de nuevo" || true;
console.log({ a6 }); // Devuelve "Ya no soy falso de nuevo". No llega a 'true'.
const a7 =
  soyFalse ||
  soyUndefined ||
  regresaTrue() ||
  "Ya no soy falso de nuevo" ||
  true;
console.log({ a7 }); // Devuelve el valor de la función 'regresaTrue', que es true.

// Tres condiciones es el límite aconsejable
if (true || true || false) {
  console.log("Hacer A");
} else {
  console.log("Hacer B");
}
