class Persona{

    private nombre:String;

    constructor(nombre:String){
        this.nombre = nombre;
    }

    getNombre():String{
        return this.nombre;
    }

    static metodoEstatico():number{
        return 12;
    }
}

let persona1 = new Persona("Carlos"); 
console.log(persona1.getNombre( ));
console.log(Persona.metodoEstatico());