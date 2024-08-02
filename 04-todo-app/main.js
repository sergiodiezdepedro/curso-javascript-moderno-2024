import { App } from "./src/todos/app";
import todoStore from './src/store/todo.store'
import "./style.scss";

todoStore.initStore();
App("#app");
