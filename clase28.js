//Para esta clase se va a estudiar cómo funciona el tiempo y los procesos asíncronos en JS.
//Tales como la 'call stack' y la 'cola de tareas'

// console.log('a');
// setTimeout(() => console.log('b'), 2000);
// console.log('c');
// //El orden de impresión en la consola de las líneas anteriores es:
// //a
// //c
// //d

// //Esto se debe a que cuando JS llega a la línea del setTimeout la pasa a la cola de tareas por lo que primero tiene que terminar con el código principal 
// //y después pasa a completar las tareas ubicadas en la cola de tareas.

// console.log('a');
// setTimeout(() => console.log('b'), 0);
// console.log('c');

//Lo mismo se aplica para el problema anterior aunque espere 0 segundos para ejecutar la función, JS primero termina el código principal 
//y después completa la lista de tareas 

// console.log('a');
// setTimeout(() => console.log('b'), 2000);
// setTimeout(() => console.log('c'), 1000);
//a
//c
//b

//Para este caso, también se imprime primero c, supongo (ya que esto no lo aclaran en la clase) que se debe a que una vez que pasan a la cola de tareas
//las funciones ya están listas para ejecutarse, solo que como le hemos dicho que se espere un tiempo en imprimirlas, entonces se imprime la c primero.

//Por último está el siguiente ejemplo
// console.log('a');
// setTimeout(() => console.log('b'), 2000);
// for(var i=0; i<10000000000; i++){

// }
// console.log('c');

//En este caso, recordando que JS antes de ejecutar la lista de cola de tareas. Primero tiene que terminar de ejecutar todo el código principal
//Por lo que completar este ciclo for tarda mucho más de 2 segundos entonces realmente termina pasando más de los 2 segundos en que se imprima b
