//Definicion y usos de la POO
// -Clase
// -Objeto
// -Atritbuto
// -Metodo
// -constructor
// -Instanciacion


class animal {

    //constructor
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }
    verInfo(){ //para los metodos no ocupamos funciones flecha
        console.log(this.info);
    }
}


let perro = new animal("perro", 3, "marron");
let gato = new animal("gato", 2, "negro");
let loro = new animal("pajaro", 1, "verde");


perro.verInfo();
gato.verInfo();
loro.verInfo();