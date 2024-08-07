/**
 *
 * @param {HTMLDivElement} element
 */

export const generatorFunctionExampleComponent = (element) => {
  const genID = idGenerator();

  const button = document.createElement("button");
  button.innerText = "Click me";
  element.append(button);

  const renderButton = () => {
    const { value } = genID.next();
    button.innerText = `Click ${value}`;
  };

  button.addEventListener("click", renderButton);
};

function* idGenerator() {
  let currentId = 0;
  while (true) {
    yield ++currentId;
  }
}
