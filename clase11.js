//En esta clase se explicarán las condicionales en JS

var sebastian = {
    nombre: 'Sebastián',
    apellido:'Ruiz',
    edad:21,
    ingeniero:true,
    cocinero:false,
    cantante:false,
    programador:true,
    dj:false
};

var profesiones = [];


function imprimirProfesiones (persona) {
    for(var i in persona){
        if(persona[i]===true)
        profesiones.push(i);
    }

    

    console.log(profesiones);
}

imprimirProfesiones(sebastian);



//En programación en ocasiones es más legible el código si una tarea, se descompone en otras más pequeñas. Para el ejemplo de ver si una persona es o no
//mayor de edad. La descompresión de esta tarea en partes más pequeñas sería de la siguiente manera.

//Primero se crea una constante indicando la mayoría de edad actual en el país.
const MAYORIA_DE_EDAD_MEXICO=18

//Después, se crea una función que compare si la edad de una persona corresponde a la de una mayor o menor de edad.

function esMayorDeEdad(persona){
    return persona.edad>=MAYORIA_DE_EDAD_MEXICO
}

//Por último, se tendría que imprimir el resultado de la comparación anterior

function imprimirSiEsMayorDeEdad (persona){
    if(esMayorDeEdad(persona)){
        console.log(persona.nombre + ' es mayor de edad');
    }
    else {
        console.log(persona.nombre + ' es menor de edad');
    }
}
