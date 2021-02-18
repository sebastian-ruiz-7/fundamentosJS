//la manera de acceder a los datos de la API, pero desde nuestro programa para poder hacer lo que queramos con ellos se hace de la siguiente manera
//primero es importante tener en todo momento cuál es el link de la API y puede ser más específico si se quiere la parte de las personas, planetas o naves
const API_URL='https://swapi.dev/api/';
const PEOPLE_URL='people/:id';

//Para hacer un request con JQuery se hace con el método de acontinuación
//Acepta varios parámetros:
//El primero es el URL   //El segundo parámetro necesario es decirle a Jquery que el request se hace a una página externa (se hace con un objeto)
const LUKE_URL=API_URL+PEOPLE_URL.replace(':id','1');
const opts= {crossDomain:true};

//Por último, se agrega el callback, el cual es una función que se va a ejecutar pero no sabemos cuándo. Pero del método get será el que llamará al callback
$.get(LUKE_URL,opts,function(luke){
    //console.log(arguments); Esta línea de código muestra cuáles son los parámetros que recibe la función
    console.log('Hola yo soy, '+luke.name);
});