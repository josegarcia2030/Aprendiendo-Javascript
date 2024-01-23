//
class Celular{
    constructor(color, peso, rdp, rdc, ram){
        this.color = color;
        this.peso = peso;
        this.rdp = rdp;
        this.rdc = rdc;
        this.ram = ram;
        this.encendido = false;
    }
    botonEncendido(){
        if(!this.encendido){
            this.encendido = true;
            console.log("Se prendio el celular");
        }else{
            this.encendido = false;
            console.log("Celular Apagado");
        }
    }
    reiniciar(){
        if(this.encendido){
            console.log("Reiniciando celular");
        }else{
            console.log("No se puede reiniciar, el celular esta apagado");              
        }
    }
    tomarFoto(){
        console.log(`Foto tomada en una resolucion: ${this.rdc}`)
    }
    grabarVideo(){
        console.log(`Grabando video en ${this.rdc}`);
    }
    mostrarInfo(){
        return `
        Color: <b>${this.color}</b></br>
        Peso: <b>${this.peso}</b></br>
        Resolucion de Camara: <b>${this.rdc}</b></br>
        Resolucion de Video: <b>${this.rdp}</b></br>
        Memoria Ram: <b>${this.ram}</b></br>
        `;
    }
    
}

class CelularGamaAlta extends Celular{
    constructor(color, peso, rdp, rdc, ram, rdce){
        super(color, peso, rdp, rdc, ram)
        this.rdce = rdce;
    }
    grabarVideoLento(){
        console.log("Estas grabando en camara lenta");
    }
    reconocimientoFacial(){
        console.log("Iniciamos el reconocimiento facial");
    }
    infoAltaGama(){
        return this.mostrarInfo() + `
        Resolucion Camara extra: ${this.rdce}`;
    }
}

const celular1 = new Celular("rojo", "150g", "5''", "hd", "1GB");
const celular2 = new Celular("negro", "155g", "5.4''","full hd", "2GB");
const celular3 = new Celular("blanco", "146g", "5.9''", "full hd", "3GB");

celular1.botonEncendido();
celular1.tomarFoto();
celular1.grabarVideo();
celular1.reiniciar();
celular1.botonEncendido();

document.write(`
${celular1.mostrarInfo()}<br>
${celular2.mostrarInfo()}<br>
${celular3.mostrarInfo()}<br>`
);

const phone1 = new CelularGamaAlta("rojo", "130g", "5.2''", "4k", "3GB", "HD");
console.log(phone1.infoAltaGama());