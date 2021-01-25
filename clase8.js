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



//JS tiene una manera un poco rara de tratar con los objetos cuando se utilizan en las funciones.
//Por ejemplo, en esta función. Cada vez que se ejecuta, el atributo edad del objeto en JS se va a actualizar.
//Es decir. En el código yo creé un objeto con mi edad actual, pero cada vez que mande a llamar a esta función, el objeto se actualizará.


function cumpleanosActualizado(persona) {
    persona.edad+=1
}



//Pero en cambio en esta función el atributo edad no se verá actualizado cunado se ejecute la función.

function cumpleanosSinActualizar (edad) {
    edad+=1
}

//Como conclusión al ejemplo anterior podemos decir que...
//Si pasamos un objeto como parámetro de una función (a esto se le llama pasarlo por referencia) el objeto alojado dentro del scope global se actualizará


//Otra manera de abordar el enfoque al problema anterior. Es que al ejecutar la función, se cree un nuevo objeto adquieriendo toda la información del 
//objeto 'padre' pero en donde el parámetro edad se vea actualizado.


function cumpleanosConNuevoObjeto (persona){
    return{
        ...persona,
        edad: persona.edad +1
    }
}

var sebastian_mas_viejo = cumpleanosConNuevoObjeto(sebastian);