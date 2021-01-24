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

//Si se escribe llaves dentro del parámetro de la función se pueden acceder a las partes de los objetos

function escribirNombreEnMayusculas ({ nombre }){
    console.log(nombre.toUpperCase());
}

escribirNombreEnMayusculas(sebastian);
escribirNombreEnMayusculas(mario);

//Esta sería una manera de llamar a la función sin necesidad de crear explícitamente el objeto
escribirNombreEnMayusculas({nombre:Juan});

