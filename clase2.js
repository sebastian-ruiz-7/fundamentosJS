var nombre='Sebastián', apellido='Ruiz';

//En JS se pueden convertir un string en puras mayúsculas con

var nombreMAYUSCULAS= nombre.toUpperCase();
console.log(nombreMAYUSCULAS);

//Para convertir un string en minúsculas se hace con 

var apellidoMinusculas=apellido.toLowerCase();
console.log(apellidoMinusculas);


//Para encontrar el caracter de un string se usa
//El parámetro de la función .charAt() es la posición del caracter que estamos buscando. 
//La inicial estaría en la posición 0

console.log(nombre.charAt(0));


//Para saber cuantos caracteres tiene se hace con

console.log(nombre.length);

//Ademas de concatenar strings con "+" se puede hacer uso de la interpolación de texto que funciona así

var nombre_completo=`${nombre} ${apellido.toUpperCase()}`

//Otra cosa que se puede hacer con los strings con JS es acceder a su substring con 
//Por ejemplo si queremos que se seleccione desde el tercer caracter hasta el sexto se haría de la siguiente forma

var str = nombre.substr(2,4);


//DESAFÍO: Mostrar al usuario cual es la última letra de su nombre
var ultima_letra=nombre.length;
console.log(nombre.charAt(ultima_letra-1));