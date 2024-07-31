class Heroe {
  // ? Propiedad estática
  static _count = 0;

  static get getCount() {
    return `${Heroe._count} instancias`;
  }
  static mensaje() {
    console.log("Hola a todos, soy un método estático");
  }

  nombre = "";
  codigo = "";
  frase = "";
  comida = "";

  constructor(
    nombre = "Sin Nombre",
    codigo = "Sin Código",
    frase = "Sin Frase"
  ) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;

    Heroe._count++;
  }

  set setComidaFavorita(comida) {
    this.comida = comida.toUpperCase();
  }

  get getComidaFavorita() {
    return `La comida favorita de ${this.nombre} es ${this.comida}`;
  }

  quienSoy() {
    console.log(`Soy ${this.nombre} y mi identidad secreta es ${this.codigo}`);
  }

  miFrase() {
    // ? Así se usa un método dentro de otro en una Clase
    // ? this.quienSoy();
    console.log(`${this.nombre} dice ${this.frase}`);
  }
}

const spiderman = new Heroe(
  "Peter Parker",
  "Spiderman",
  "Soy tu querido vecino Spiderman"
);

const ironman = new Heroe("Tony Stark", "Iron Man", "Yo soy Iron Man");
// const captainAmerica = new Heroe("Steve Rogers", "Captain America", "My shield is cool");

console.log(spiderman);
console.log(ironman);

spiderman.quienSoy();
ironman.miFrase();

console.warn("Ejemplo de setter");

spiderman.setComidaFavorita = "El pastel de cerezas de la tía May";
console.log(spiderman);

console.warn("Ejemplo de getter");
console.log(spiderman.getComidaFavorita);

console.warn("Propiedad, getter, método estáticos");

console.log("Conteo estático:", Heroe._count);
console.log(Heroe.getCount);
Heroe.mensaje();
