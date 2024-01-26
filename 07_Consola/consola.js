//alert("Funciona");

console.assert(5 > 3);
//console.assert(5 < 3);
console.log("Hola");
console.log("Hola");
console.log("Bienenido");
console.log("A la programacion");
//console.clear();



let numero;
if(numero){
    console.log(numero)
}else{
    console.error("La variable no esta definida");
}

console.info("Emite un mensaje informatio a la consola web. En firefox y chrome, se muestra un pequeno icono i");

let nombres = [
    "jose",
    "enrique",
    "miguel",
    "natalia",
    "jorge",
    "antonio",
    "carlos",
    "eduardo",
    "luis"
];

console.table(nombres);

console.warn("console.war() - Imprime un mensaje de advertencia en la consola web");


const persona = {
    nombre : "jose enrique",
    apellido : "garcia flores",
    edad : 27,
    genero : "masculino",
    profesion : "ingeniero"
};

console.info(persona);
console.log(persona);
console.dir(persona);
console.dir(nombres);


const sumar = (num1, num2)=>{
    document.write(num1 + num2);
    console.count();
};


console.log(sumar(1,2));
sumar(3,4);
sumar(5,6);
sumar(7,8);
sumar(9, 10);
sumar(11, 12);
sumar(13, 14);
//console.countReset();

sumar(1,2);


/**
 * FUNCIONES DE CONTEO
 * 
 * group()
 * grupEnd()
 * groupCollapsed()
 */


console.group("Grupo 1");
console.groupCollapsed("1 tiempo");
console.log("tarea 1");
console.log("Tarea 2");
console.groupEnd();
console.groupCollapsed("2 tiempo");
console.log("tarea 3");
console.log("tarea 4");
console.groupEnd();
console.groupCollapsed("3 tiempo");
console.log("tarea 5");
console.log("tarea 6");
console.groupEnd();
console.groupCollapsed("4 tiempo");
console.log("tarea 7");
console.log("tarea 8");
console.groupEnd();
console.groupEnd();

console.info("Empieza otra vez");

/**
 * FUNCIONES DE TEMPORIZADOR
 * 
 * time()
 * timeEnd()
 * timeLog()
 */


console.time();
const tomarTiempo = ()=>{
    console.log("Estas empezando a tomar el tiemp");
    let contador = 0;
    let variable = 0;
    while(contador < 10){
        contador++;
        variable += contador;
    }
    return variable;
}

console.log(`La variable tiene un valor de : ${tomarTiempo()}`);
console.timeLog();
console.log("Finalizamos el time");
console.timeEnd();