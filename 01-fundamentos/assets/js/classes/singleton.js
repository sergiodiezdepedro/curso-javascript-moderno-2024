// ? Un singleton es una instancia única de una Clase (de manera global en toda la aplicación)

class Singleton {
  static instancia; // undefined
  nombre = "";

  constructor(nombre = "") {
    // ? Si la instancia existe
    if (!!Singleton.instancia) {
      return Singleton.instancia;
      // ? Si no existe
    } else {
      Singleton.instancia = this;
      this.nombre = nombre;
    }
  }
}

const instancia1 = new Singleton("Iron Man");
const instancia2 = new Singleton("Spiderman");
const instancia3 = new Singleton("Hulk");

console.log(`El nombre en la instancia 1 es: ${instancia1.nombre}`);
console.log(`El nombre en la instancia 2 es: ${instancia2.nombre}`);
console.log(`El nombre en la instancia 3 es: ${instancia3.nombre}`);
