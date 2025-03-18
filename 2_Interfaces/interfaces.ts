interface Usuario {
   nombreUsuario: String;
   password: String;
   confirmarPassword?: String /*utiliza simbolo ?, para que sea opcional*/;
 }
 
 let usuario1: Usuario = { nombreUsuario: "Carlos", password: "222" };
 console.log(usuario1);
 console.log(usuario1.nombreUsuario);
 
//Podemos utilizar métodos
interface Abordar {
  abordarTransporte:()=>void;
}

let avion: Abordar = {
   abordarTransporte:function(){
    console.log("abordando");
  }
};

avion.abordarTransporte();