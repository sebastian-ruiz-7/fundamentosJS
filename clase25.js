class persona{
    constructor (nombre,apellido,altura) {
        this.nombre=nombre;
        this.apellido=apellido;
        this.altura=altura;
    }

    saludar(){
    console.log('Hola, me llamo ' +this.nombre+' ' + this.apellido)
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
    saludar(){
    console.log('Hola, me llamo ' +this.nombre + ' ' + this.apellido+ ' y soy desarrollador');
    }
}

var sebastian = new desarrollador('Sebastián', 'Ruiz',1.7);
var aldo = new persona('Aldo','Ruiz',1.65);
var oswaldo =new persona('Oswaldo','Silva',1.81);


