var sebastian = {
    nombre: 'Sebastián',
    apellido: 'Ruiz',
    edad: 21,
    peso: 65
}

console.log('Al inicio del año ' + sebastian.nombre + ' pesa '+ sebastian.peso + ' kg');

const VARIACION_DEL_PESO=0.200;
 
const aumentarDePeso =(persona) => persona.peso +=VARIACION_DEL_PESO

const disminuyeDePeso =(persona) => persona.peso -=VARIACION_DEL_PESO


for(var i=1; i<=365;i++){
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
}

console.log('Al final del año ' + sebastian.nombre + ' pesa '+ sebastian.peso.toFixed(1) + ' kg');
