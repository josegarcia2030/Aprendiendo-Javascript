//alert("El javascript esta funcionando");


/* 
    Variables
    =============

    string
    number
    booleano
*/

//Declarando variables
let nombre;
let edad;
let estudia;

//declarando variables en 1 sola linea
let carnet, celular, direccion;


//Inicializando las variables
carnet = "8215587";
celular = "69246604";
direccion = "Avenida Sudamericana entre 4to y 5to anillo";

//
nombre = "natalia";
edad = 10;
estudia = true;

//Undefined : 
//Es cuando la variable esta declarada per no se le asigno ningun valor
let sexo;
console.log("La variable tiene un valor: " + sexo);
sexo = "femenino";
console.log("El genero es: " + sexo);

//variables constantes
const PI = 3.1416;
console.log("El valor de PI: " + PI);
//no se pueden cambiar los valores de las const
//PI = 2.14;
//console.log("Nuevo valor de PI: " + PI); //Nos da error


function alertas(){
    nombre = prompt("Escribe tu nombre:")
    alert("Bienvenido " + nombre);

}


let num1 = 10;
let num2 = 5;

let respuesta = num1 + num2;
console.log("El resultado de la suma: " + respuesta);

//resta
respuesta = num1 - num2;
console.log("El resultado de la resta: " + respuesta);

//multiplicacion
respuesta = num1 * num2;
console.log("El resultado de la multiplicacion es: " + respuesta);

//division
respuesta = num1 / num2;
console.log("El resultado de la division es: " + respuesta);

//resto
respuesta = num1 % num2;
console.log("El resultado del resto es: " + respuesta);

//exponenciacion
respuesta = num1 ** 2;
console.log("El resultado de la exponenciacion: " + respuesta);

//
let varriable1 = 25;
let variable2 = 15;

console.log("El valor de la variable 1: " + varriable1);
console.log("El valor de la varibale 2: " + variable2);

varriable1--;
variable2++;

console.log("El valor de la variable 1: " + varriable1);
console.log("El valor de la varibale 2: " + variable2);

//concatenar
firstName = "jose enrique";
lastName = "garcia flores";

saludo = `Bienvenido ${firstName} ${lastName}`;
console.log(saludo);

//Operadores de comparacion
respuesta = varriable1 == variable2
if(respuesta){
    console.log("Son iguales");
}else{
    console.log("No son iguales");
}

respuesta = varriable1 != variable2;
if(respuesta){
    console.log("Son Distintos");
}else{
    console.log("Son iguales")
}


let numero1 = "25";
let numero2 = "25";

respuesta = numero1 === numero2;
if(respuesta){
    console.log("Son Indenticos");
}else{
    console.log("No son identicos");
}

respuesta = numero1 > numero2;
if(respuesta){
    console.log("Es mayor al primer numero");
}else if(numero1 < numero2){
    console.log("Es menor al primer numero");
}else{
    console.log("Son iguales los 2 numeros");
}

//Operadores Logicos and, or y not
let varibale_1 = 17;
let variable_2 = 22;
let variable_3 = 65;


if(varibale_1 >= 18 && varibale_1 < 65){
    console.log("Estas dentro del rango de personas para obtener la licencia de conducir");
}else{
    console.log(`No estas en el rango permitido de edad por tener ${varibale_1} años`);
}

let trabaja = true;
estudia = false;
let conduce = true;

if((conduce || estudia) && (trabaja && edad >= 18)){
    console.log(`Tienes los requisitos para postular`);
}else{
    console.log(`No cuentas con los requisitos minimos`);
}

//camelCase
let holaComoEstas;