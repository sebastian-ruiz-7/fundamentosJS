//la manera de acceder a los datos de la API, pero desde nuestro programa para poder hacer lo que queramos con ellos se hace de la siguiente manera
//primero es importante tener en todo momento cuál es el link de la API y puede ser más específico si se quiere la parte de las personas, planetas o naves
const API_URL='https://swapi.dev/api/';
const PEOPLE_URL='people/:id';

//Para hacer un request con JQuery se hace con el método de acontinuación
//Acepta varios parámetros:
//El primero es el URL   //El segundo parámetro necesario es decirle a Jquery que el request se hace a una página externa (se hace con un objeto)
const opts= {crossDomain:true};



//This class will study the way to make multiple promises. A way to explain promise is think of then as if they are values that we don't know right now, but 
//eventually when the request will be completed we know the value.

//The promise have 3 state. Pending (not resolved yet). Fullfilled (succed). Rejected (fail or reject).

//To get the value of the promise we use:
    //.then (only if the request was succed)
    //.catch (when the promise pass to the rejected state)


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

//This is the way to make multiples promises.
//It is important to say that this is the way to make series request
getCharacter(1)
    .then(character=>{console.log('El personaje 1 es '+character.name)
    return getCharacter(2)})
        .then(character=>{console.log('El personaje 2 es '+character.name)
        return getCharacter(3)})
            .then(character=>{console.log('El personaje 3 es '+character.name)
            return getCharacter(4)})
                .then(character=>{console.log('El personaje 4 es '+character.name)
                return getCharacter(5)})
                    .then(character=>{console.log('El personaje 5 es '+character.name)
                    return(getCharacter(6))})
                        .then(character=>{console.log('El personaje 6 es '+character.name)
                        return getCharacter(7)})
                            .then(character=>console.log('El personaje 7 es '+character.name))
    .catch(onError)

