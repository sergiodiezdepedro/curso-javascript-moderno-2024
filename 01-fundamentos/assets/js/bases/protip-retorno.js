// function crearPersona( nombre, apellido ) {
//     return { nombre,apellido }
// }
const crearPersona = (nombre, apellido) => ({ nombre, apellido });

const persona = crearPersona("Pez", "Hammer");
console.log("Persona:", persona);

function imprimeArgumentos() {
  console.log(arguments);
}

imprimeArgumentos(10, true, false, "Benzema", 40.04);

const imprimeArgumentos2 = (edad, ...args) => {
  // console.log({ edad, args });
  return args;
};

imprimeArgumentos2(30, false, false, "Güler", 1034.04);

const [casado, vivo, nombre, saludo] = imprimeArgumentos2(
  10,
  true,
  false,
  "Peret",
  "Hola"
);
console.log({ casado, vivo, nombre, saludo });

const { apellido: nuevoApellido } = crearPersona("Arón", "Ramos");
console.log({ nuevoApellido });

const tony = {
  nombre: "Tony Stark",
  codeName: "Iron Man",
  vivo: false,
  edad: 40,
  trajes: ["Mark I", "Mark V", "Hulkbuster"],
};

// const imprimePropiedades = ( personaje ) => {

//     console.log( 'Nombre:',personaje.nombre );
//     console.log( 'codeName:',personaje.codeName );
//     console.log( 'Vivo:',personaje.vivo );
//     console.log( 'Edad:',personaje.edad );
//     console.log( 'Trajes:',personaje.trajes );

// }
const imprimePropiedades = ({ nombre, codeName, vivo, edad = 18, trajes }) => {
  console.log({ nombre });
  console.log({ codeName });
  console.log({ vivo });
  console.log({ edad });
  console.log({ trajes });
};

imprimePropiedades(tony);
