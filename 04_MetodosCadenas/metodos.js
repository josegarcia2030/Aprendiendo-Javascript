//Metodos de cadena


let cadena = "cadena de prueba";
let cadena2 = "cadena";
let cadena3 = "prueba";


let resultado = cadena.concat(cadena);
console.log(resultado);



//verificar si la cadena empieza(con la cadena que quiero)
resultado = cadena.startsWith(cadena2);
console.log(resultado);

//verifica si finaliza con(la cadena que le paso)
resultado = cadena.endsWith(cadena3);
console.log(`Termina con la cadena ${cadena3}`);

//verifica si una cadena se encuentra dentro de otra cadena
resultado = cadena.includes("de");
console.log(resultado);

//verifica si la cadena se encuentra y nos devuelve su posicion donde empieza
resultado = cadena.indexOf(cadena3);
console.log(resultado);

//devuelve el ultimo indice del primer caracter de la cadena, sino existe, devuelve -1
cadena = "la cadena de prueba esta en nuestra lista que estaremos utilizando para el proyecto sera esta";
resultado = cadena.lastIndexOf("esta");
console.log(resultado);

//Rellena la cadena al principio con lo que deseemos
resultado = cadena2.padStart(12, "hola");
console.log(resultado);

//rellena la cadena al final con lo que le pasemos
resultado = cadena3.padEnd(20, "holamundo");
console.log(resultado);

//repite la cadena las veces que le indiquemos
resultado = cadena2.repeat(3);
console.log(resultado);

//Divide la cadena como le pidamos
cadena = "hola como estas";
cadena2 = "hola 123 4556 estas en este mes"
resultado = cadena.split(" ");
console.log(resultado);
//convirtio la cadena en un arreglo
for(let r in resultado){
    console.log(resultado[r]);
}
resultado = cadena2.split(" ");
for(let r of resultado){
    console.log(r);
}

//Nos devuelve un pedazo de la cadena que seleccionamos
cadena = "ABCDEFGHI";
resultado = cadena.substring(0, 3);
console.log(resultado);

//Convierte una cadena a minuscula
cadena = "BIENVENIDO AL MUNDO DE LA PROGRAMACION CON JAVASCRIPT";
resultado = cadena.toLowerCase();
console.log(`Se convirtio a minuscula: ${resultado}`);

//Convierte una cadena a mayuscula
cadena = "estas a la mitad del curso de Javascript";
console.log(cadena.toUpperCase());

//nos devuelve una cadena de texto
cadena = 2346;
cadena2 = cadena.toString();
console.log("10" + cadena2);

//eliminar los espacios de una cadena
cadena = "  mi cadena   ";
console.log(`La cadena tiene ${cadena.length} caracteres`);
console.log(`La cadena tiene ${cadena.trim().length} caracteres`);

//quitar los espacios de una cadena al principio
cadena = "   la cadena de caracteres"
console.log(`La cadena tiene: ${cadena.length} caracteres`)
console.log(`quitando espacios al principio: ${cadena.trimStart().length} caracteres`);

//quitar los espacios de una cadena al final
cadena = "en la cadena de caracteres esta el formato    ";
console.log(`La cadena tiene ${cadena.length} caracteres`);
console.log(`quitando espacios al final: ${cadena.trimEnd().length} caracteres`);
