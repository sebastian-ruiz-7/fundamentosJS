var edad = 27;
edad +=1;


//Supongamos que pesamos 75 kg y bajamos 2. Entonces podríamos representar nuestro peso actual como
var peso = 75;
peso -= 2  ;



//ahora suponemos que nos comimos un sandwich que aumenta 1kg nuestro peso entonces se repesenta como
var sandwich=1;
peso+=sandwich;


//si realizamos ejercicio disminuye el peso en 3 kg 

var hacer_deporte=3;
peso-=hacer_deporte;

//si agregamos los decimales a las compras

var precio_vino=200.3;

//si compramos 3 vinos sería

var compra_total = precio_vino*3;


//Debido a la manera en que las computadoras calculan los decimales. En el navegador compra_total=600.900000001
//Entonces si queremos evitarnos tantos decimales lo podemos hacer con el 

var total=compra_total.toFixed(3);

//Pero la función toFixed lo deja como un string. Para pasarlo a tipo numero se hace con

total= parseFloat(total);

