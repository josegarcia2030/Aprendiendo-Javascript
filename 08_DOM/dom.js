//alert("Manejo del DOM");

/**
 * DOM
 * 
 * Nodo .-  Un nodo en el DOM es cualquier etiqueta del cuerpo, como un parrafo
 *          el mismo body o incluso las etiquetas de una lista
 * 
 * Document.- el nodo document es el nodo raiz, a partir del cual derivan el resto
 *            de nodos
 * Element.- nodos definidos por etiquetas html
 * Text.- el texto dentro de un nodo element se considera un nuevo nodo hijo de tipo text
 * Attribute.- los atributos de las etiquetas definen nodos (en JS no los veremos como nodos,
 *              sino como informacion asociada al nodo de tipo element)
 * Comentarios y otros.- los comentarios y otros elementos como las declaraciones doctype en cabecera
 *                      de los documentos HTML generan nodos.
 */



/**
 * Document - Metodos de Seleccion de elementos
 * 
 *          - document.getElementById().- Selecciona un elemento por ID
 *          - document.getElementByTagName().- Selecciona todos los elementos que coincidan con el nombre de la etiqueta especifica
 *          - document.querySelector().- Devuelve el primer elemento que coincida con el grupo especificado de selectores
 *          - document.querySelectorAll().- Devuelve todos los elementos que coincidan con el grupo especificado de selectores 
 *
 */

/*
let parrafo = document.getElementById("parrafo");
console.log(parrafo);

let p = document.getElementsByName("p");
document.write(p);

let p2 = document.querySelector(".parrafo");
document.writeln(p2);


let p3 = document.querySelectorAll(".parrafo");
document.write(p3[0]);


/**
 * Metodos para Definir, Obtener y Eliminar valores de atributos
 * 
 *  -setAttribute().- Modifica el valor de un atributo
 *  -getAttribute().- Obtiene  el valor  de un atributo
 *  -removeAttribute().- Remueve el valor de un atributo
 */

/*
const rangoEdad = document.querySelector(".rangoEdad");
rangoEdad.setAttribute("type", "range");

// modificar el atributo de una etiqueta input
const password = document.querySelector(".password");
password.setAttribute("type", "password");

const email = document.querySelector(".email");
email.setAttribute("type", "email");

//Obtener el valor de atributos
const valorAtributo = rangoEdad.getAttribute("type");
document.getElementById("mostrarDato").innerHTML = valorAtributo;

const valorAtributo2 = password.getAttribute("type");
document.getElementById("mostrarDato2").innerHTML = valorAtributo2;

const valorAtributo3 = email.getAttribute("type");
document.getElementById("mostrarDato3").innerHTML = valorAtributo3;


//Remover el atributo
const input = document.querySelector(".input");
input.removeAttribute("type");


/**
 * ATRIBUTOS GLOBALES
 * 
 *  - class.- lista de clases del elemento separadas por espacios
 *  - contenteditable.- indica si elemento puede ser modificable por el usuario
 *  - dir.- indica las direccionalidad del texto
 *  - hidden.- indica si el elemento aun no es, o ya no es, releante
 *  - id.- define un identificador unico
 *  - style.- contiene declaraciones de estilo CSS para ser aplicadas al elemento
 *  - tabindex.- indica si el elemento puede obtener un focus de input
 *  - title.- contiene un texto con informacion relacionada al elemento al que pertenece
 */


const titulo = document.querySelector(".titulo");
titulo.setAttribute("contentEditable", "true");

const subTitulo = document.querySelector(".subTitulo");
subTitulo.removeAttribute("hidden");

const parrafo = document.querySelector(".parrafo");
parrafo.setAttribute("tabindex", "3");

titulo.setAttribute("title", "Titulo Principal de la Pagina");



/**
 * Atributos de Inputs
 * 
 *  - className
 *  - value
 *  - type
 *  - accept
 *  - form
 *  - minlength
 *  - placeholder
 *  - required
 */


const inputNormal = document.querySelector(".input-normal");
console.log(`Nombre de la clase del input: ` + inputNormal.className);
console.log(`El valor del input: ` + inputNormal.value);
//modificando el tipo del input
inputNormal.type = "password";
inputNormal.type = "email";
inputNormal.setAttribute("value", "Escribe tu correo electronico");


const files = document.querySelector(".files");
files.accept = "image/jpg";

const nombre = document.querySelector(".input-nombre");
nombre.minLength = 10;

const input_nombre = document.querySelector(".nombre");
input_nombre.placeholder = "Escribe tu nombre";
input_nombre.required = "true";