var sebastian = {
    nombre: 'Sebastián',
    apellido: 'Ruiz',
    edad: 21,
    peso: 65
}

console.log('Al inicio del año ' + sebastian.nombre + ' pesa '+ sebastian.peso + ' kg');

const VARIACION_DEL_PESO=0.200;
const PESO_ACTUAL= sebastian.peso;
const META=3;
const PESO_OBJETIVO=PESO_ACTUAL-META;
var i=1; //Contador de días
 
const aumentarDePeso =(persona) => persona.peso +=VARIACION_DEL_PESO

const disminuyeDePeso =(persona) => persona.peso -=VARIACION_DEL_PESO

//el objetivo de este programa es hacer que la persona disminuya 3 kg con el ciclo while y decir cuántos días le tomó bajar esos kilos, 
//pero manteniendo el random

while(sebastian.peso>PESO_OBJETIVO){
    var random=Math.random()

    if (random<0.25){
        //aumento de peso
        aumentarDePeso(sebastian);
    } else if (random<0.50){
        //disminuye de peso
        disminuyeDePeso(sebastian);
    } else {
        //no pasa nada
    }
    i++
}



console.log('Al final del año ' + sebastian.nombre + ' pesa '+ sebastian.peso.toFixed(1) + ' kg. Le tomó '+ i + ' días.');
