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
    altura:'1.8'
};

var personas=[sebastian,aldo,irma,mario,sunem,oswaldo];


for(var i in personas){
    console.log(personas[i].nombre + ' mide ' + personas[i].altura+ ' m.');
}

