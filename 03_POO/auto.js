/**
 * Practicando la POO con una clase Automovil
 */

class Auto{
    constructor(nombre, modelo, peso, color, encendido){
        this.nombre = nombre;
        this.modelo = modelo;
        this.peso = peso;
        this.color = color;
        this.encendido = encendido;
    }
    //metodos
    infoAuto(){
        return `
        Nombre: ${this.nombre}
        Modelo: ${this.modelo}
        Peso: ${this.peso} Kg
        Color: ${this.color}`;
    }
    encender(){
        if(this.encendido){
            return "El auto ya esta encendido";
        }else{
            this.encendido = true;
            return "Se ha encendido el auto";
            
        }
    }
    conducir(){
        if(this.encendido){
            return "Estas conduciendo el auto";
        }
        else{
            return "Necesitas prender el auto para conducirlo";
        }
    }
    frenar(){
        return "Has frenado";
    }
    detener(){
        return "Acabas de detener el auto";
    }
}

let auto1 = new Auto("Fiat", "2024", "850", "blanco");
console.log(auto1.infoAuto());
console.log(auto1.conducir());
console.log(auto1.encender());
console.log(auto1.conducir());
