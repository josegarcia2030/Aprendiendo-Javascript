//alert("Ejercicios de JS");


const obtenerInformacion =(materia)=>{

    const materias = {

        fisica : [
            "Perez", "pedro", "pepito", "cofla", "maria"
        ],
        programacion : [
            "Rodriguez", "pedro", "juan", "pepito"
        ],
        logica : [
            "Hernandez", "pedro", "juan", "pepito", "cofla", "maria"
        ],
        quimica : [
            "Dalto", "pedro", "juan", "pepito", "cofla", "maria"
        ]

    }

    if(materias[materia] !== undefined){
        return [materias[materia], materia, materias];
    }else{
        return materias;
    }

} 

const mostrarInformacion =(materia)=>{
    let informacion = obtenerInformacion(materia);

    if(informacion !== false){
        let profesor = informacion[0][0];
        let alumnos = informacion[0];
        alumnos.shift();
        console.log(`
        El profesor de ${informacion[1]} es ${profesor}
        Los alumnos son : ${alumnos}
        `);
    }
}

const cantidadDeClases =(alumno)=>{
    let informacion = obtenerInformacion()
    let cantidadTotal = 0;
    let clasesPresentes = [];

    for(let info in informacion){
        if(informacion[info].includes(alumno)){
            cantidadTotal++;
            clasesPresentes.push("" + info);
        }
    }
    return `
    ${alumno} esta en ${cantidadTotal} materias
    Esta cursando las clases ${clasesPresentes}
    `;
}

mostrarInformacion("fisica");
mostrarInformacion("quimica");
mostrarInformacion("programacion");
mostrarInformacion("logica");

console.log(cantidadDeClases("cofla"));