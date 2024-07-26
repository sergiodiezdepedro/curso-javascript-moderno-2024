let personaje = {
  nombre: "Tony Stark",
  codeName: "Iron Man",
  vivo: false,
  edad: 40,
  coords: {
    lat: 34.034,
    lng: -118.7,
  },
  trajes: ["Mark I", "Mark V", "Hulkbuster"],
  direccion: {
    zip: "10880, 90265",
    ubicacion: "Malibu, California",
  },
  "ultima-pelicula": "Infinity War",
};

console.log({ personaje });
console.log(`Edad del personaje: ${personaje.edad} años`);
console.log("Nombre:", personaje["nombre"]);
console.log("Coordenadas:", personaje.coords);
console.log("Latitud:", personaje.coords.lat);
console.log("Número de trajes:", personaje.trajes.length);
console.log("Último traje:", personaje.trajes[personaje.trajes.length - 1]);

const x = "vivo";
console.log("¿Vivo?:", personaje[x]);

console.log("Última película", personaje["ultima-pelicula"]);

// Métodos

delete personaje.edad;
console.log(personaje);

// ? Se crea una nueva propiedad del Objeto
personaje.casado = true;

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

// ? Se bloquean ulteriores modificaciones de las propiedades directas del Objeto, pero no a los objetos dentro del Objeto
Object.freeze(personaje);

personaje.dinero = 10000000000;
personaje.casado = false;
// ? La línea siguiente cambia la ubicación, porque no es una propiedad directa del Objeto
personaje.direccion.ubicacion = "Costa Rica";
console.log(personaje);
// ? Se listan, respectivamente, las propiedades y los valores del Objeto
const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log({ propiedades, valores });
