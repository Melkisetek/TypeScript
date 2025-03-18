function Saludar(target: Function): void {
  target.prototype.Saludos = function (): void {
    console.log("Hola desde decoradores");
  };
}

@Saludar
class Hola {
  constructor() {}
}

let hola1 = new Hola();
hola1.Saludos();
