let texto:String = "prueva x";
/*Es más riguroso con las variables*/

let cualquierValor:any; /*Permite asignarle cualquier valor*/
cualquierValor = "text";
cualquierValor = 23;
cualquierValor = 3.3;
cualquierValor = true;

const PI = 3.14;


function saludar(){
    console.log(cualquierValor);
    console.log(PI);
}

saludar();