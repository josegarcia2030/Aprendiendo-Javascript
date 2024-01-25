//alert("Ejericio 4");

class Calculadora{

    //
    constructor(){
        //this.numero1 = numero1;
        //this.numero2 = numero2;
    }

    sumar(numero1, numero2){
        return numero1 + numero2;
    }
    restar(numero1, numero2){
        return numero1 - numero2;
    }
    multiplicar(numero1, numero2){
        return numero1 * numero2;
    }
    dividir(numero1, numero2){
        if(numero2 != 0){
            return numero1 / numero2;
        }else{
            return "No se puede realizar la division";
        }
    }
    potencia(numero, exponente){
        //return Math.pow(numero, exponente);
        return numero ** exponente;
    }
    raizCuadrada(numero){
        return Math.sqrt(numero);
    }
    raizCubica(numero){
        return Math.cbrt(numero);
    }
}

//
const calculadora1 = new Calculadora();
//console.log(`El resultado de sumar ${calculadora1.numero1} + ${calculadora1.numero2} = ${calculadora1.sumar()}`);
let resultado = 0;
const pedirPrimerNumero = ()=> {
    let numero = parseInt(prompt("Escribe el 1er numero para la operacion"));
    return numero;
    
}
const pedirSegundoNumero = ()=>{
    let numero = parseInt(prompt("Escribe el 2do numero para la operacion"));
    return numero;
}

const opcionesOperacion = ()=>{
    let opcion = parseInt(prompt(`
    Escribe el numero de la Operacion Aritmetica que desees realizar:
    1.- Suma
    2.- Resta
    3.- Multiplicacion
    4.- Division
    5.- Potenciacion
    6.- Raiz Cuadrada
    7.- Raiz Cubica

    `));
    return opcion;
}

let operacion = opcionesOperacion();
//prompt(`La opcion que elegiste fue: ${operacion}`);
switch(operacion){
    case 1:
        alert("Elegiste realizar una suma");
        resultado = calculadora1.sumar(pedirPrimerNumero(), pedirSegundoNumero());
        mensaje = `
        El resultado es: ${resultado}`;
        alert(mensaje);
        break;
    case 2:
        alert("Elegiste realizar una resta");
        resultado = calculadora1.restar(pedirPrimerNumero(), pedirSegundoNumero());
        mensaje = `
        El resultado es: ${resultado}`;
        alert(mensaje);
        break;
    case 3:
        alert("Elegiste realizar una multiplicacion");
        resultado = calculadora1.multiplicar(pedirPrimerNumero(), pedirSegundoNumero());
        mensaje = `
        El resultado es: ${resultado}`;
        alert(mensaje);
        break;
    case 4:
        alert("Elegiste realizar una division");
        resultado = calculadora1.dividir(pedirPrimerNumero(), pedirSegundoNumero());
        mensaje = `
        El resultado es: ${resultado}`;
        alert(mensaje);
        break;
    case 5:
        alert("Elegiste realizar potenciacion");
        resultado = calculadora1.potencia(pedirPrimerNumero(), pedirSegundoNumero());
        mensaje = `
        El resultado es: ${resultado}`;
        alert(mensaje);
        break
    case 6:
        alert("Elegiste realizar una raiz cuadrada");
        resultado = calculadora1.raizCuadrada(pedirPrimerNumero());
        mensaje = `
        El resultado es: ${resultado}`;
        alert(mensaje);
        break;
    case 7:
        alert("Elegiste realizar una raiz cubica");
        resultado = calculadora1.raizCubica(pedirPrimerNumero());
        mensaje = `
        El resultado es ${resultado}`;
        alert(mensaje);
        break;
    default:
        alert("La opcion que elegiste no es valida");
        break;
}












