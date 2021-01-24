//Para esta clase vamos a introducirnos en los objetos y sus características

var sebastian = {
    nombre:'Sebastian',
    apellido:'Ruiz',
    edad: 21,
};


var mario = {
    nombre:'Mario',
    apellido:'Armenta',
    edad: 56
};

//Otra manera de acceder a los atributos de los objetos es a través de la desestructuración de objetos

function escribirNombreEnMayusculas (persona){
    var {nombre}=persona
    console.log(nombre.toUpperCase());
}

escribirNombreEnMayusculas(sebastian);
escribirNombreEnMayusculas(mario);

//RETO: escribir una función que al ejecutarla, imprima:
    //Hola, me llamo Sebastian y tengo 21 años
    //Hola, me llamo Mario y tengo 56 años.


function escribirNombreyEdad (persona){
    var nombre=persona.nombre;
    var edad=persona.edad;
    console.log('Hola, me llamo ' + nombre + ' y tengo ' + edad + ' años');
}

escribirNombreyEdad(sebastian);
escribirNombreyEdad(mario);