/**
 * Practicando POO con la clase animal
 */

class Animal{
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;        
    }
    verInfo(){
        return `
        Soy un ${this.especie}
        y tengo ${this.edad} años
        soy de color ${this.color}
        `;
    }
}

class Dog extends Animal{
    constructor(especie, edad, color){
        super(especie, edad, color)
        this.raza = null;
    }
    ladrar(){
        console.log("El perro esta ladrando");
    }
    static caminar(){
        console.log("El perro esta caminando");
    }
    static correr(){
        console.log("El perro comenzo a correr");
    }
    set setRaza(newRaza){
        this.raza = newRaza;
    }
    get getRaza(){
        return this.raza;
    }
}




//const dog = new Animal("perro", 5, "cafe");
//console.log(dog.verInfo());
//const dog = new Dog("perro", 5, "cafe", "doberman");
//console.log(dog.verInfo());
//dog.ladrar();
const perro1 = new Dog("perro", 2, "blanco y negro");
console.log(perro1.getRaza);
perro1.setRaza = "Cachuchin";
Dog.caminar();
Dog.correr();
console.log(perro1.getRaza);

