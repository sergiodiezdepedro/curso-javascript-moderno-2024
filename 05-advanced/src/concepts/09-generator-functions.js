/**
 *
 * @param {HTMLDivElement} element
 */

export const generatorFunctionsComponent = (element) => {
  const myGenerator = myFirstGeneratorFunction();
  console.log(myGenerator.next());
  console.log(myGenerator.next());
  console.log(myGenerator.next());
  console.log(myGenerator.next());
  console.log(myGenerator.next());
};

function* myFirstGeneratorFunction() {
  yield "Primer valor";
  yield "Segundo valor";
  yield "Tercer valor";
  yield "Cuarto valor";
  return "Ya no hay valores";
  // * A partir del return todo código es inaccesible
  yield "Ya no se puede hacer nada";
}
