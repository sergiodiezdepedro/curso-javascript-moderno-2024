const state = [
  {
    id: 1,
    name: "Batman",
  },
  {
    id: 2,
    name: "Superman",
  },
  {
    id: 3,
    name: "Flash",
  },
  {
    id: 4,
    name: "Wonder Woman",
  },
];

const index = 0;
const newName = "Green Lantern";

const newState = state.with(index, {
  id: 1000,
  name: newName,
});

state[0].name = "Aquaman"

console.table(state);
console.table(newState);

console.log("El Primero", newState.at(0));
console.log("El Último", newState.at(-1));
