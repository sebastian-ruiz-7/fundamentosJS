//la manera de acceder a los datos de la API, pero desde nuestro programa para poder hacer lo que queramos con ellos se hace de la siguiente manera
//primero es importante tener en todo momento cuál es el link de la API y puede ser más específico si se quiere la parte de las personas, planetas o naves
const API_URL='https://swapi.dev/api/';
const PEOPLE_URL='people/:id';

//Para hacer un request con JQuery se hace con el método de acontinuación
//Acepta varios parámetros:
//El primero es el URL   //El segundo parámetro necesario es decirle a Jquery que el request se hace a una página externa (se hace con un objeto)
const opts= {crossDomain:true};



//This clase will study the correct way to get the character if we want to keep the order in they was called.
//To do that, it's necessary pass a second parameter to the function getCharacter
function getCharacter(id,callback){
    //This is the URL of the caracter. The id defines the specific caracther by number. For example id=1 (Luke SkyWalker), id=2 (C-3PO), etc.
    const Character_URL=API_URL+PEOPLE_URL.replace(':id',id);

    $
    .get(Character_URL,opts,callback)
    //This is the way that we can let know the user that something went wrong and it's necessary refresh the page
    .fail(()=>console.log('Sucedió un error. No se pudo obtener el personaje' + id))
}



getCharacter(1, function(character) {
    console.log('Hola, yo soy ' + character.name);
    getCharacter(2, function(character) {
       console.log('Hola, yo soy ' + character.name);
        getCharacter(3, function(character) {
            console.log('Hola, yo soy ' + character.name);
            getCharacter(4,function(character){
               console.log('Hola, yo soy ' + character.name);
            })
        })
    })
})