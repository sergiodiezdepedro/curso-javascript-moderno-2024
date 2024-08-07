import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
// import { environmentsComponent } from './src/concepts/01-environment'
// import { callbacksComponent } from "./src/concepts/02-callbacks";
// import { callbacksHellComponent } from "./src/concepts/02b-callback-hell";
// import { promiseComponent } from "./src/concepts/03-promises";
// import { promiseRaceComponent } from "./src/concepts/04-promise-race";
// import { asyncComponent } from "./src/concepts/05-async";
// import { asyncAwaitComponent } from "./src/concepts/06-async-await";
// import { asyncAwaitNoSecuencialesComponent } from "./src/concepts/07-async-await-no-secuenciales";
// import { forAwaitComponent } from "./src/concepts/08-for-await";
// import { generatorFunctionsComponent } from "./src/concepts/09-generator-functions";
// import { generatorFunctionExampleComponent } from "./src/concepts/09b-generator-function-example";
import { generatorsAsyncComponent } from "./src/concepts/10-generators-async";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
    </div>
  </div>
`;
const element = document.querySelector(".card");
// environmentsComponent(element)
// callbacksComponent(element);
// callbacksHellComponent(element)
// promiseComponent(element);
// promiseRaceComponent(element);
// asyncComponent(element);
// asyncAwaitComponent(element);
// asyncAwaitNoSecuencialesComponent(element);
// forAwaitComponent(element);
// generatorFunctionsComponent(element);
// generatorFunctionExampleComponent(element);
generatorsAsyncComponent(element);
