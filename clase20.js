var sebastian = {
    nombre:'Sebastián',
    apellido:'Ruiz',
    altura:1.7,
    cantidadDeLibros: 111
};

var aldo = {
    nombre:'Aldo',
    apellido:'Ruiz',
    altura:1.65,
    cantidadDeLibros: 78
};

var irma = {
    nombre:'Irma',
    apellido:'Álvarez',
    altura:1.6,
    cantidadDeLibros: 132
};

var mario = {
    nombre:'Mario',
    apellido:'Ruiz',
    altura:1.7,
    cantidadDeLibros: 90
};

var sunem = {
    nombre:'Sunem',
    apellido:'Sánchez',
    altura:1.55,
    cantidadDeLibros: 91
};

var oswaldo = {
    nombre:'Oswaldo',
    apellido:'Silva',
    altura:1.81,
    cantidadDeLibros: 182
};

var personas=[sebastian,aldo,irma,mario,sunem,oswaldo];




//Para esta clase se va a estudiar la función "reduce" para los arrays
//Se va a sacar la cuenta total de los libros que tienen todas las personas

//El objetivo de la clase se puede hacer con un ciclo for, como se muestra a continuación

// var numLibros=0;

// for(var i in personas){
//     numLibros+=personas[i].cantidadDeLibros;
// }

//console.log('La cantidad de libros entre las personas es: ' + numLibros);




//Sin embargo, también se puede hacer con la función "reduce" de la siguiente manera

const reducer = (acumulador,personas) => acumulador + personas.cantidadDeLibros;



//Es importante decir, que los parámetros que utiliza la función 'reduce' se necesita la función que va a actuar y el valor inicial del acumulador
var totalDeLibros=personas.reduce(reducer, 0);

console.log('La cantidad de libros entre las personas es: ' + totalDeLibros);
