/**
 * Caracteristicas de la POO
 * - Abstraccion
 * - Modularidad
 * - Encapsulamiento
 * - Polimorfismo
 */

class persona{
    constructor(nombre, apellido, edad, genero, documento, celular, correo){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.genero = genero;
        this.documento = documento;
        this.celular = celular;
        this.correo = correo;
    }
    saberGenero(genero){
        if(genero == "m" || genero == "M"){
            return "Masculino";
        }
        else if(genero == "f" || genero == "F"){
            return "Femenino";
        }
        else{
            return "No se especifico el genero";
        }
    }
    informacionPersonal(){
        return `
        Nombre: ${this.nombre}
        Apellido: ${this.apellido}
        Edad: ${this.edad} años
        Genero: ${this.saberGenero(this.genero)}
        Documento: ${this.documento}
        Celular: ${this.celular}
        Correo: ${this.correo}
        `
    }
}

let persona1 = new persona("enrique", "garcia flores", 27, "m", "8215587", "69246604", "jose.garcia.f.2010@gmail.com");
console.log(persona1.informacionPersonal());
let persona2 = new persona("ambra", "spinatto hurtado", 26, "F", "8345531", "73824987", "ambra.spinattoH@gmail.com");
console.log(persona2.informacionPersonal());
let persona3 = new persona();