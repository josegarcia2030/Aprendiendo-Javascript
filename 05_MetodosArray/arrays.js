//alert("funciona el js");


let nombres = [
    "jose enrique",
    "miguel angel",
    "marco antonio",
    "jose luis",
    "carlos eduardo",
    "francisco antonio"
];

let autos = [
    "suzuki",
    "mustang",
    "toyota",
    "kia",
    "ford"
];

let meses = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre"
];

//eliminar el ultimo elemento de un array y devuelve el array
let resultado = nombres.pop();
console.log(`El elemento que se elimino contenia: ${resultado}`);
console.log("La lista a quedado de esta forma:");
for(let n in nombres){
    console.log(`${n} ` + nombres[n]);
}

//elimina el 1er elemento de un array y lo devuelve
console.log(autos); 
resultado = autos.shift();
console.log(`El 1er elemento fue ${resultado} y ha sido eliminado`);

//agrega un elemento al array al final de la lista
autos.push("BMW", "tiggo");
console.log(autos);

//invierte  el orden de los elementos de un array
autos.reverse();
console.log(autos);

//agrega uno o mas elementos al inicio del array, y despues devuelve la nueva longitud del array
nombres.unshift("carlos", "natalia","juana");
console.log(nombres);



//ordena los elementos de un arreglo localmente y devuelve el arreglo ordenado
meses.sort();
for(let m in meses){
    console.log(meses[m]);
}
autos.sort();
for(let a in autos){
    console.log(`- ${autos[a]}`);
}



let frutas = [
    "manzana",
    "guineo",
    "pera",
    "frutilla",
    "sandia",
    "uva"
];
//cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos
console.log("Lista de Frutas");
for(let f in frutas){
    console.log(`- ${frutas[f]}`);
}
console.log("Lista de frutas modificadas");
frutas.splice(3,1);
for(let f in frutas){
    console.log(`* ${frutas[f]}`);
}
console.log("Lista de frutas, con agregados");
frutas.splice(0, 0, "kiwi", "papaya", "limon");
for(let f in frutas){
    console.log(`.- ${frutas[f]}`);
}



//Une todos los elementos de una matriz (u objeto similar) en una cadena y la devuelve
let cadenaNueva = frutas.join("\n");
console.log(cadenaNueva);
cadenaNueva = autos.join(" - ");
console.log(cadenaNueva);


// Devuelve una parte del array dentro de un nuevo array empezando por inicio hasta fin
//(fin no incluido)
resultado = nombres.slice(0, -1);
console.log(resultado);
resultado = nombres.slice(0, 3);
console.log(resultado);
resultado = nombres.slice(1, 4);
console.log(resultado);

//Metodos ya visto en cadenas:
//toString()
//indexOf()
//lastIndexOf()
//includes()

let autoBuscar = "toyota";
resultado = autos.includes(autoBuscar);
const buscarAuto = (res)=>{
    if(res){
        return "Si se encuentra";
    }else{
        return "No se encuentra";
    }
}
console.log(`La marca del auto ${autoBuscar} que estas buscando, ${buscarAuto(resultado)}`);

//
let nombreBuscar = "enrique";
resultado = nombres.indexOf(nombreBuscar);
const buscarNombrePosicion = (pos)=>{
    if(pos >= 0){
        return `El nombre se encuentra en la posicion ${pos}`;
    }else{
        return "El nombre no se encuentra";
    }
}
console.log(`El nombre que buscas: ${nombreBuscar} 
${buscarNombrePosicion(resultado)}`);


//Utilizar Filter
frutas.filter(fruta => console.log(`${fruta}`));
nombres.filter(nombre => console.log(` - ${nombre}`));
autos.filter(auto => console.log(`* ${auto}`));
meses.filter(mes => console.log(`+ ${mes}`));

//nos permite realizar una busqueda
let busqueda = frutas.filter( fruta => fruta.length > 5);
console.log(busqueda); 


//Utilizar forEach
let respuesta = nombres.forEach( nombre => console.log(nombre));
respuesta = frutas.forEach(fruta => console.log(fruta));
respuesta = meses.forEach(mes => console.log(mes));