class persona{
    constructor (nombre,apellido,altura) {
        this.nombre=nombre;
        this.apellido=apellido;
        this.altura=altura;
    }

    saludar(fn){
        console.log('Hola, me llamo ' +this.nombre+' ' + this.apellido)
        if(fn){
            fn(this.nombre,this.apellido);
        }
    }

    alta(){
        if(this.altura<1.8){
            console.log('No soy alto');
        }else{
            console.log('Soy alto');
        }
    }
}


//Para que una clase pueda heredar de la clase persona se hace de la siguiente manera

class desarrollador extends persona{
    constructor(nombre,apellido,altura){
        super(nombre,apellido,altura);
    }
    saludar(fn){
        console.log('Hola, me llamo ' +this.nombre + ' ' + this.apellido+ ' y soy desarrollador');
        if(fn){
            fn(this.nombre,this.apellido,true);
        }
    }
}

var sebastian = new desarrollador('Sebastián', 'Ruiz',1.7);
var aldo = new persona('Aldo','Ruiz',1.65);
var oswaldo =new persona('Oswaldo','Silva',1.81);


//En esta clase se va a estudiar el uso de funciones como parámetros para el constructor
//por ejemplo, en esta clase se hará una función que haga que cada vez que saludemos a alguno pueda regresar ese saludo

function responderSaludo(nombre,apellido,esdesarrollador){
    console.log('Buen día ' +nombre + ' '+ apellido);
    if(esdesarrollador){
        console.log('Ah mirá, no sabía que eras desarrollador/a');
    }
}


sebastian.saludar(responderSaludo);
aldo.saludar(responderSaludo);
oswaldo.saludar(responderSaludo);