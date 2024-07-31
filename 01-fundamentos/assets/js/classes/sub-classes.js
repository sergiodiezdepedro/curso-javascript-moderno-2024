class Persona {
  static _count = 0;

  static get getCount() {
    return `${Persona._count} instancias`;
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

    Persona._count++;
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
    console.log(`${this.nombre} dice ${this.frase}`);
  }
}

class Heroe extends Persona {
  clan = "Sin clan";
  constructor(nombre, codigo, frase) {
    super(nombre, codigo, frase);
    this.clan = "Avengers";
  }

  quienSoy() {
    console.log(`Soy ${this.nombre} y mi clan es ${this.clan}`);
    // ? El método siguiente es el de la clase padre Persona y para utilizarlo hay que emplear la palabra reservada 'super'
    super.quienSoy();
  }
}
const spiderman = new Heroe(
  "Peter Parker",
  "Spiderman",
  "Soy tu querido vecino Spiderman"
);
console.log(spiderman);
spiderman.quienSoy();
