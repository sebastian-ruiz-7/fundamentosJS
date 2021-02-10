var sebastian = {
    nombre:'Sebastián',
    apellido:'Ruiz',
    altura:1.7
};

var aldo = {
    nombre:'Aldo',
    apellido:'Ruiz',
    altura:1.65
};

var irma = {
    nombre:'Irma',
    apellido:'Álvarez',
    altura:1.6
};

var mario = {
    nombre:'Mario',
    apellido:'Ruiz',
    altura:1.7
};

var sunem = {
    nombre:'Sunem',
    apellido:'Sánchez',
    altura:1.55
};

var oswaldo = {
    nombre:'Oswaldo',
    apellido:'Silva',
    altura:1.81
};

var personas=[sebastian,aldo,irma,mario,sunem,oswaldo];



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

//Para esta clase, se va a transformar la altura de las personas de m a cm
//Pero creando un nuevo array, para que el original no se vea modificado

const pasarAlturaACms = persona => {
    return {
        ...persona,
    altura: persona.altura*100
    }
}

var personaCms= personas.map(pasarAlturaACms)
console.log('Altura en cm');
console.log(personaCms);

