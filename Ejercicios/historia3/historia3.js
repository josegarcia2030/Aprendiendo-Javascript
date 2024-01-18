//alert("Javascript funcionando");
let listaAlumnos = [];
let notas = [];
let registro = {};

const cantidadAlumnos = () =>{
    let cantidad;
    cantidad = parseInt(prompt("Escribe la cantidad de alumnos que se van a registrar"));
    return cantidad;
};

const registrarNombres = (cantidad) => {
    let contador = 0;
    while(contador < cantidad){
        let nombre = prompt("Escribe el nombre");
        listaAlumnos[contador] = nombre;
        contador++;
    }
};

const mostrarAlumnos = ()=>{
    for(alumno of listaAlumnos){
        console.log(alumno);
    }
};

const registrarNotas = ()=>{
    let contatador = 0;
    while(contatador < 19){
        let nota = prompt("Escribe la nota: ");
        notas[contatador] = nota;
        contatador++;
    }

};


 let alumnosClase = cantidadAlumnos();
 registrarNombres(alumnosClase);
 registrarNotas();
 mostrarAlumnos();




