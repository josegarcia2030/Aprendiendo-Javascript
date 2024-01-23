//alert("Funciona el JS");
class Animal{

    //
    constructor(nombre, color){
        this.nombre = nombre;
        this.color = color;
    }
    camina(){
        
    }
    corre(){

    }
    salta(){

    }
}


class Aves extends Animal{
    constructor(nombre, color, especie){
        super(nombre, color)
        this.especie = especie;
    }
    set setEspecie(newEspecie){
        this.especie = newEspecie;
    }
    get getEspecie(){
        return this.especie;
    }
    
    vuela(){

    }
}

