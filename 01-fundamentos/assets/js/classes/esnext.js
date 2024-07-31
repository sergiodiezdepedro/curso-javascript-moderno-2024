class Rectangulo {
  // ? Propiedad privada con '#'
  #area = 0;

  constructor(base = 0, altura = 0) {
    this.base = base;
    this.altura = altura;
    this.#area = base * altura;
  }

  // ? Método privado
  #recalCularArea(modificador) {
    return this.base * this.altura * modificador;
  }
  // ? Método público que utiliza el método privado
  resultadoRecalcularArea(modificador) {
    return this.#recalCularArea(modificador);
  }
}

const rectangulo = new Rectangulo(10, 15);
// ? Como 'area' es una propiedad privada ya no se puede modificar desde fuera de la clase rectangulo. La línea de código siguiente da un error de JavaScript
// ? rectangulo.#area = 100;
console.log(rectangulo);
// ? Llamar al método público
console.log(
  `Multiplicado por 1000 por el método resultadoRecalcularArea: ${rectangulo.resultadoRecalcularArea(
    1000
  )}`
);
// ?  Intentar llamar al método privado desde fuera de la clase resultará en un error: Error: Uncaught SyntaxError: Private field '#recalcularArea' must be declared in an enclosing class
// ? console.log(rectangulo.#recalCularArea(10));
