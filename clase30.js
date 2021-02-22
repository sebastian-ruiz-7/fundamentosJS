//la manera de acceder a los datos de la API, pero desde nuestro programa para poder hacer lo que queramos con ellos se hace de la siguiente manera
//primero es importante tener en todo momento cuál es el link de la API y puede ser más específico si se quiere la parte de las personas, planetas o naves
const API_URL='https://swapi.dev/api/';
const PEOPLE_URL='people/:id';

//Para hacer un request con JQuery se hace con el método de acontinuación
//Acepta varios parámetros:
//El primero es el URL   //El segundo parámetro necesario es decirle a Jquery que el request se hace a una página externa (se hace con un objeto)
const opts= {crossDomain:true};


//Para esta clase se van a hacer múltiples request en paralelo, eso se hace de la siguiente manera.

function getCharacter(id){
    //This is the URL of the caracter. The id defines the specific caracther by number. For example id=1 (Luke SkyWalker), id=2 (C-3PO), etc.
    const Character_URL=API_URL+PEOPLE_URL.replace(':id',id);

    $.get(Character_URL,opts,function(character){
       console.log('Hola, yo soy ' + character.name);
    })
}


//El problema con esto es que, debido al asíncronismo de JS, es imposible saber el orden en que se imprimirán en consola. Es decir, prácticamente 
//será aleatorio. En la siguiente clase se verá un método para que los personajes se impriman en la consola en el mismo orden como fueron llamados.
getCharacter(1) //Luke
getCharacter(2) //C-3PO
getCharacter(3) //R2-D2

