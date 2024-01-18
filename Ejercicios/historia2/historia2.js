
let entradas = prompt("Cuantas entradas estan disponibles");
let contador = 0;
let edades = [];
let horarios = [];

while(contador < entradas){
    let edad = prompt("Escribe la edad: ");
    edades[contador] = edad;
    let horario = prompt("Escribe el horario: ");
    horarios[contador] = horario; 
    contador++;
}

/*
for(let edad in edades){
    console.log(`La edad: ${edades[edad]} -- Horario: ${horarios[edad]}`);

console.log(edades);
console.log(horarios);
}*/

for(let edad in edades){
    for(let horario in horarios){
        console.log(edades[edad] + " == " + horarios[horario]);
    }
}