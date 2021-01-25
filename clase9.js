//En esta clase vamos a ver las distintas maneras de comparar variables u objetos dentro de JS.

var x=4, y='4';

//Si queremos comparar, es decir, ver las similitudes entre las variables anteriores lo hacemos con '==' o'==='

//Recordando que el '==' se refiere a que si el valor de la variable son iguales, sin importar el tipo de dato que se esté analizando
//Es decir, para x==y (el resultado sería verdadero ya que el valor que tienen ambas variables es el mismo, aunque no sean del mismo tipo)

//En cambio, si usamos x===y (el resultado sería falso, pues a pesar de que si tienen el mismo valor, no son del mismo tipo)



//Cuando comparamos objetos, la comparación no se hace sobre si tienen los mismos atributos o si el contenido es idéntico.
//La comparación se hace sobre si tienen el mismo espacio en memoria. Es decir, la comparación de esto

var sebastian = {
    nombre: 'sebastian'
};

var otra_persona = {
    nombre: 'sebastian'
};

//Sería 'FALSE' ya que a pesar de que tienen los mismos atributos, no tienen el mismo espacio en memoria. 
//Para que el resultado sea positivo sería con

var mario ={
    nombre:'Mario'
};

var otro_individuo =mario;

//Aquí el resultado de la comparación sería positivo.


