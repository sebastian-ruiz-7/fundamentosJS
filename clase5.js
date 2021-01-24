//Vamos a ver el alcance de las funciones. Es decir, que las variables que sean globales si pueden ser utilizadas dentro de las funciones.
//Pero las variables declaradas dentro de una función no puedes ser utilizadas fuera del código de estas funciones.


var nombre = 'Sebastián'


//Para no sobreescribir la variable nombre, lo que hacemos es agregarle un parámetro a esta función. Para este caso, el parámetro se llama igual a la 
// variable global, pero no es necesario que sea así.

function escribirNombreEnMayusculas (nombre){
    nombre=nombre.toUpperCase();
    console.log(nombre);
}

escribirNombreEnMayusculas(nombre);