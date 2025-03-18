"use strict";
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
    getNombre() {
        return this.nombre;
    }
    static metodoEstatico() {
        return 12;
    }
}
let persona1 = new Persona("Carlos");
console.log(persona1.getNombre());
console.log(Persona.metodoEstatico());
