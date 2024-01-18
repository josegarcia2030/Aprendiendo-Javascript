//Empezaremos a ver los Arreglos
let frutas = [
    "manzana",
    "banana",
    "naranja",
    "pera",
    "frutilla"
];

let nombres = [
    "jose",
    "enrique",
    "miguel",
    "natalia",
    "angel"
];

let ciudades = [
    "santa cruz",
    "la paz",
    "oruro",
    "cochabamba",
    "chuquisaca",
    "potosi",
    "pando",
    "beni",
    "tarija"
];

document.getElementById("subTitulo").innerHTML = "Array Asociativos";
document.getElementById("subTitulo").style.color = "mediumblue";

document.write("Lista de frutas\n");
document.write(frutas[0]);


//Array Asociativos

let pc = {
    nombre : "DaltoPC",
    procesador: "Intel Core i7",
    ram: "32GB",
    espacio: "1TB"
};


let datosPersonales = {
    nombre: "jose enrique",
    apellido: "garcia flores",
    edad: 27,
    documento: "8215587",
    genero: "masculino",
    celular: "692546604"
};


let infoDatos = `Nombre Completo : ${datosPersonales["nombre"]} ${datosPersonales["apellido"]}
Edad: ${datosPersonales["edad"]} years
Documento: ${datosPersonales["documento"]} sc
Genero: ${datosPersonales["genero"]}
Celular: ${datosPersonales["celular"]}`;

console.log(infoDatos);



let edad = datosPersonales["edad"];
if(edad < 18){
    console.log("Eres un menor de edad");
}else if(edad >= 18 && edad <= 30){
    console.log("Eres una persona madura");
}else{
    console.log("Eres una persona mayor");
}

let cont = 0;
while(cont < 10){
    cont++;
    console.log(cont);
    
}

cont = 0;
console.log("Numeros pares:")
while(cont < 20){
    cont += 2;
    console.log(cont);
}

//Do While
//Si queremos que por lo menos se ejecute una vez
// ya sea que sea verdadero o no
do{
    console.log("El contador esta en: " + cont);
}while(cont < 2);


cont = 0;
//break
while(cont < 1000){
    cont += 100;
    console.log(cont);
    if(cont == 700){
        break;
    }
    
}

cont = 0;
while(cont < 30){
    cont += 3;
    console.log(cont);
    if(cont == 27){
        break;
    }
}

for(let i = 0; i < 8; i++){
    console.log(`El numero es ${i}`);
}

for(let i = 0; i < 8; ++i){
    console.log(i);
}

for(let i = 6; i >= 0; i--){
    console.log(i);
}



//continue
console.log("Practicando continue");
let a = 0;
while(a < 15){
    a += 3;
    if(a == 9){
        console.log("Este numero fue saltado");
        continue;
    }
    console.log(a);
}

a = 0;
while(a < 10){
    a ++;
    if(a == 5){
        console.log("Estas en la mitad");
        continue
    }
    console.log("-" + a);
}

// For in -  For of
let animales = [
    "gato",
    "perro",
    "loro",
    "vaca",
    "cerdo",
    "pato",
    "gallina"
];

for(animal in animales){
    console.log(animal);
}

for(animal of animales){
    console.log(animal);
}

console.log("animales");

for(animal in animales){
    console.log(`- ${animales[animal]}`);
}

let apellidos = [
    "garcia",
    "flores",
    "monasterios",
    "soliz",
    "mendoza",
    nombres
];

/*for(let apellido in apellidos){
    console.log(apellidos[apellido]);
    if(apellido == 5){
        for(let nombre of nombres){
            console.log(nombre)
        }
    }  
    
}*/
let hobbies = [
    "futbol",
    "basquet",
    "voleibol"
];

nombres = [
    "jose enrique",
    "luis enrique",
    "mauricio moy",
    "miguel angel",
    hobbies,
    "natalia garcia",
    "ambra hurtado"
];

for(let nombre in nombres){
    if(nombre == 4){
        for(let hobbie of hobbies){
            document.write(hobbie + "<br>")
        }
    }else{
        document.write(nombres[nombre] + "<br>");
    }
}


for(let nombre in nombres){
    if(nombre == 4){
        for(let hobbie of hobbies){
            console.log(hobbie);
        }
    }else{
        console.log(nombres[nombre]);
    }
}


let apodos = [
    "rasek",
    "civil",
    "pesado",
    "moy",
    "choco",
    "pato",
    "colla"
];
let celulares = [
    "69246604",
    "77814106",
    apodos,
    "71666771",
    "70060003"
];

forCelulares:
for(let celular in celulares){
    if(celular == 2){
        //console.log("Es otro arreglo");
        console.log("Lista de Apodos");
        for(let apodo of apodos){
            if(apodo == "pato"){
                console.log("Este pato va de arquero");
                continue forCelulares;
            }
            console.log(`- ${apodo}`);
        }
    }else{
        console.log(celulares[celular]);
    }
}

let paises = [
    "argentina",
    "brasil",
    "bolivia",
    "chile",
    "ecuador",
    "uruguay"
];

/*for(let ciudad of ciudades){
    console.log(`- ${ciudad}`)
}
*/
for(pais of paises){
    if(pais == "bolivia"){
        console.log("Estas en Bolivia");
        for(let ciudad of ciudades){
            console.log(`- ${ciudad}`);
        }
        continue;
    }
    console.log(`* ${pais.toUpperCase()}`);
}


//FUNCIONES

let numero_uno = 30;
let numero_dos = 15;


function sumaDosNumeros(num1, num2){
    let res = num1 + num2
    return res;
}
function restaDosNumeros(num1, num2){
    let res = num1 - num2;
    return res;
}
function multiplicarDosNumeros(num1, num2){
    let res = num1 * num2;
    return res;
}

let resultado = sumaDosNumeros(numero_uno, numero_dos);
console.log(`El resultado de la suma es: ${resultado}`);
resultado = restaDosNumeros(numero_uno, numero_dos);
console.log(`El resultado de la resta es: ${resultado}`);
resultado = multiplicarDosNumeros(numero_uno, numero_dos);
console.log(`El resultado de la multiplicacion es: ${resultado}`);

//otra forma de crear funciones
const suma = function(n1, n2){
    return n1 + n2;
}
const resta = function(n1, n2){
    return n1 - n2;
}
const multiplcar = function(n1, n2){
    return n1 * n2;
}


//Funciones Flechas
//=================================
const sumar = (num1, num2)=>{
    return num1 + num2;
};

const restar = (n1, n2)=> {
    return n1 - n2;
};

const multiplicar = (num1, num2)=>{
    return num1 * num2;
};

const saludar = nombre => { //si solo es un parametro, sin parentesis
    console.log(`Como estas ${nombre}?`);
};

//Si solo es 1 instruccion podemos realizar esta funcion
const saludo = nombre => console.log(`Bienvenido ${nombre}`);

const mensaje = usuario => "Estas avanzando en la programacion con JS";

saludar("ENRIQUE");
console.log(mensaje("rasek2030"));

const esUnAdulto = (edad) => {
    if(edad >= 18){
        console.log("Eres mayor de edad, tienes " + edad);
    }else{
        console.log("No eres mayor de edad, tienes " + edad);
    }
}

const estasTrabajando = (trabaja)=> {
    if(trabaja){
        console.log("La persona ya se encuentra trabajando");
    }else{
        console.log("La persona no tiene trabajo");
    }
}

const estasEstudiando = (estudia)=> {
    if(estudia){
        console.log(`La persona esta estudiando`);
    }else{
        console.log("La persona no estudia");
    }
}

esUnAdulto(27);
estasTrabajando(false);
estasEstudiando(true);
