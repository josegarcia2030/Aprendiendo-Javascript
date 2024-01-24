//alert("Funciona el JS");
//Objetos Math


const pedirNumero = (mensaje) =>{
    let num = prompt(`Escribe el numero para sacar su ${mensaje}`);
    return num;
}

let numero1 = 25//pedirNumero("cuadrado");
let numero2 = 27//pedirNumero("cubica");

//SQRT() - Devuelve la raiz cuadrada positiva de un numero
let cuadrado_numero = Math.sqrt(numero1)
document.write(`El cuadrado del numero ${numero1} es: ${cuadrado_numero}<br>`);


//CBRT() - Devuelve la raiz cubica de un numero
let cubica_numero = Math.cbrt(numero2);
document.write(`La cubica del numero ${numero2} es: ${cubica_numero}<br>`);


//MAX() - Devuelve el mayor de cero o mas numeros
let numero_maximo = Math.max(1,2,45,67,876,3456,7688,123);
console.log(`El numero mas alto es: ${numero_maximo}`);


//MIN() - Devuelve el mas pequeno de cero o mas numeros
let numero_minimo = Math.min(2,45,7,8,9654,32,1,45);
console.log(`El numero mas minimo es: ${numero_minimo}`);


//RANDOM() - Devuelve un numero pseudo-aleatorio entre 0 y 1
let numero_random = Math.random();
console.log(numero_random);

//ROUND() - Devuelve el valor de un numero redondeado al numero entero mas cercano
let numero_redondeado = Math.round(numero_random);
console.log(`Numero redondeado: ${numero_redondeado}`);

//FROUND() - Devuelve la representacion flotante de precision simple mas cercana de un numero
let numero_cercano = Math.fround(4.8);
console.log(`Numero mas cercano al redondear: ${numero_cercano}`);

//FLOOR() - Devuelve el mayor entero menor o igual a un numero, redondeo hacia abajo
let numero = 39.9;
console.log(`Numero ${numero} su mas cercano : ${Math.floor(numero)}`);

//TRUNC() - Devuelve la parte entera del numero x, la eliminacion de los digitos fraccionarios
let res = Math.trunc(102.2)
console.log(`El numero ${res}`);



//UTILIZANDO LOS METODOS
//Obtener un numero aleatorio entre 0 y 100;
// 1 al 99
numero = Math.random() * 99;
numero =  Math.floor(numero + 1);
console.log(`Numero aleatorio: ${numero}`);


/**
 *          PROPIEDADES
 * ================================
 */

//PI - Radio de la circunferencia de un circulo respecto a su diametro, aproximadamente 3.14159

//SQRT1_2 - Raiz cuadrada de 1/2; Equivalente, 1 sobre raiz cuadrada de 2, aproximadamente 0.707

//SQRT2 - Raiz cuadrada de 2, aproximadamente 1.414

//======================================

//E - Constante de Euler, la base de los logaritmos naturales, aproximadamente

//LN2 - Logaritmo natural de 2, aproximadamente 0.693

//LN10 - Logaritmo de 10, aproximadamente 2.303

//LOG2E - Logaritmo de E con base 2, aproximadamente 1.443

//LOG10E - Logaritmo de E con base 10, aproximadamente 0.434
