let a = 9;

if (a >= 10) {
  console.log("A es mayor o igual que 10");
} else {
  console.log("A es menor que 10");
}

const hoy = new Date();
// ? 0: domingo, 1: lunes, 2: martes, 3: miércoles...
let dia = hoy.getDay();
console.log({ dia });

if (dia === 0) {
  console.log("Hoy es domingo");
} else if (dia === 1) {
  //   if (dia === 1) {
  //     console.log("Hoy es lunes");
  //   } else {
  //     console.log("No es ni domingo, ni lunes");
  //   }
} else if (dia === 2) {
  console.log("Hoy es martes");
} else {
  console.log("Hoy no es ni domingo, ni lunes, ni martes");
}
