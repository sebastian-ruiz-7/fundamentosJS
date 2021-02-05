//En esta clase se explicarán las condicionales en JS

var sebastian = {
    nombre: 'Sebastián',
    apellido:'Ruiz',
    edad:17,
    ingeniero:true,
    cocinero:false,
    cantante:false,
    programador:true,
    dj:false
};



const MAYORIA_DE_EDAD_MEXICO=18


//En JS se le puede asignar una función a una variable o constantes. Es decir.

// const esMayorDeEdad= function (persona){
//     return persona.edad>=MAYORIA_DE_EDAD_MEXICO
// }

//Sin embargo, en JS existe otra manera de escribir funciones que es a través de arrows funtion.
//Si la función sólo tiene un parámetro, se pueden obviar los parámetros (solo en las arrows funtions)
//Además si la función solo hace el 'return' de algún argumento, también se puede obviar la palabra return 
const esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD_MEXICO;


//Las 2 funciones llamadas esMayorDeEdad son MUY MUY similares, en donde difieren es en el contexto, pero prácticamente son idénticas.


function imprimirSiEsMayorDeEdad (persona){
    if(esMayorDeEdad(persona)){
        console.log(persona.nombre + ' es mayor de edad');
    }
    else {
        console.log(persona.nombre + ' es menor de edad');
    }
}


//Se escribe una función que va a permitir el acceso de una persona con base en su edad

function permitirAcceso (persona){
    if(!esMayorDeEdad(persona)){
        console.log(persona.nombre + ' no tiene permitido el acceso');
    }
    else{
        console.log(persona.nombre + ' bienvenido');
    }
}

//RETO: Escribir una función que sea esMenorDeEdad como arrow funtion y que simplemente retorne la negación a la función esMayorDeEdad


const esMenorDeEdad = persona => !esMayorDeEdad(persona)