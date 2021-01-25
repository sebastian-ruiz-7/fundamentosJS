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

var profesiones = [];


function imprimirProfesiones (persona) {
    for(var i in persona){
        if(persona[i]===true)
        profesiones.push(i);
    }

    

    console.log(profesiones);
}

imprimirProfesiones(sebastian);



//RETO: Hacer una función que describa si una persona es mayor o menor de edad

function imprimirSiEsMayorDeEdad (persona){
    if(persona.edad >=18){
        console.log(persona.nombre + ' es mayor de edad');
    }
    else {
        console.log(persona.nombre + ' es menor de edad');
    }
}
