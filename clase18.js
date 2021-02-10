var sebastian = {
    nombre:'Sebastián',
    apellido:'Ruiz',
    altura:'1.7'
};

var aldo = {
    nombre:'Aldo',
    apellido:'Ruiz',
    altura:'1.65'
};

var irma = {
    nombre:'Irma',
    apellido:'Álvarez',
    altura:'1.6'
};

var mario = {
    nombre:'Mario',
    apellido:'Ruiz',
    altura:'1.7'
};

var sunem = {
    nombre:'Sunem',
    apellido:'Sánchez',
    altura:'1.55'
};

var oswaldo = {
    nombre:'Oswaldo',
    apellido:'Silva',
    altura:'1.81'
};

var personas=[sebastian,aldo,irma,mario,sunem,oswaldo];


// for(var i in personas){
//     console.log(personas[i].nombre + ' mide ' + personas[i].altura+ ' m.');
// }

//Para esta clase vamos a filtrar a las personas altas

var personasAltas=[];

for(var i in personas){
    if(personas[i].altura>1.80){
        personasAltas.push(personas[i]);
    }
}
console.log('Personas Altas');
console.log(personasAltas);

//Reto: Escribir el filtrado de personas bajas
var personasBajas=[];

for(var i in personas){
    if(personas[i].altura<1.6){
        personasBajas.push(personas[i]);
    }
}

console.log('Personas Bajas');
console.log(personasBajas);

//Aunque también se puede hacer como dice en la clase de la siguiente forma, solo que me pareció más adecuado mi método XD

// const esAlta = ({altura}) => altura > 1.8

// var personasAltas = personas.filter(esAlta)