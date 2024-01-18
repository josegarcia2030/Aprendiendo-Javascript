// Ejercicio 1

let nombre1, nombre2, nombre3;
nombre1 = prompt("Escribe la cantidad de dinero que tiene Roberto: ");
nombre2 = prompt("Escribe la cantidad de dinero que tiene Pedro: ");
nombre3 = prompt("Escribe la cantidad de dinero que tiene Cofla");


alert(`El dinero de cada uno:\nRoberto ${nombre1}\nPedro ${nombre2}
Cofla ${nombre3}`);

let mensaje = `Los precios de helados son los siguiente:
Palito de helado de agua: 0.60$
Palito de helado de crema: 1$
Bombon helado marca heladix: 1.6$
Bombon helado marca heladovich: 1.7
Bombon helado marca helardo: 1.8$
Potecito de helado con confites: 2.9$
Pote de 1/4 kg: 2.9$`;

alert(mensaje);
let heladosCaros = `Potecito de helado con confites: 2.9$
Pote de 1/4 kg: 2.9$`;

//Precio mas caro de los helados
let precioHeladoCaro = 2.9;
alert(heladosCaros);

//Total de dinero que tienen entre los 3 amigos
let total = parseFloat(nombre1) + parseFloat(nombre2) + parseFloat(nombre3);
alert(`El total que tienen entre los 3 es de ${total}$`);

dinero = total;
let heladosComprar = 0;
while(dinero > precioHeladoCaro){
    heladosComprar++;
    dinero -= precioHeladoCaro;
}

let cambio = Number(dinero.toFixed(2));
if(cambio > 0){
    alert(`Con el dinero que tienen, les alcanza para comprar ${heladosComprar} helados
    Y su cambio sera de ${cambio}$`);
}else{
    alert(`Con el dinero que tienen podran comprar ${heladosComprar}`);
}