function persona (nombre,apellido,altura) {
    this.nombre=nombre;
    this.apellido=apellido;
    this.altura=altura;
}

persona.prototype.saludar=function(){
    console.log('Hola, me llamo ' +this.nombre+' ' + this.apellido)
}


var sebastian = new persona('Sebastián', 'Ruiz',1.7);
var aldo = new persona('Aldo','Ruiz',1.65);
var oswaldo =new persona('Oswaldo','Silva',1.81);


//Sin embargo si hacemos la evaluación de la altura con una arrow funtion se hace desprende un error
//De este error se explorará en la siguiente clase sobre el contexto de las funciones

//Se este 'error' se arregla de la siguiente manera
//El problema ocurre debido a que el this en las arrow funtion apuntan al objeto window y no al objeto persona
persona.prototype.alta=function(){
    if(this.altura<1.8){
        console.log('No soy alto');
    }else{
        console.log('Soy alto');
    }
}