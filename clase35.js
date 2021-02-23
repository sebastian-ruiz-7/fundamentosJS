//la manera de acceder a los datos de la API, pero desde nuestro programa para poder hacer lo que queramos con ellos se hace de la siguiente manera
//primero es importante tener en todo momento cuál es el link de la API y puede ser más específico si se quiere la parte de las personas, planetas o naves
const API_URL='https://swapi.dev/api/';
const PEOPLE_URL='people/:id';

//Para hacer un request con JQuery se hace con el método de acontinuación
//Acepta varios parámetros:
//El primero es el URL   //El segundo parámetro necesario es decirle a Jquery que el request se hace a una página externa (se hace con un objeto)
const opts= {crossDomain:true};



//This class will study the way to make multiple paralel promises.

function getCharacter(id){
    return new Promise((resolve,reject)=>{
        const Character_URL=API_URL+PEOPLE_URL.replace(':id',id);

        $
            .get(Character_URL,opts,(data)=>{resolve(data)})
            .fail(()=>reject(id))
    })

}

function onError(id){
    console.log('Sucedión un error al obtener el personaje '+id);
}

//this is the way to make multiples parallel promises but keeping the order in they were called
var ids = [1,2,3,4,5,6,7];

var promises=ids.map(id=>getCharacter(id));

//This return a arrays full of objects whit the info of the characther at the same time
Promise
    .all(promises)
    .then(characther=>console.log(characther))
    .catch(onError)
