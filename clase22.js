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

//Crear la función para que la persona salude



//RETO: agrgar la función al prototipo de la persona en el que se diga si la persona es alta o no (>1.8m)
// persona.prototype.alta=function(){
//     if(this.altura<1.8){
//         console.log('No soy alto');
//     }else{
//         console.log('Soy alto');
//     }
// }

//Sin embargo si hacemos la evaluación de la altura con una arrow funtion se hace desprende un error
//De este error se explorará en la siguiente clase sobre el contexto de las funciones
persona.prototype.alta=()=>this.altura>1.8