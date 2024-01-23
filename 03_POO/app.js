//alert("Funciona el JS");
class App{
    constructor(descargas, puntuacion, peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }
    openApp(){
        if(!this.iniciada){
            this.iniciada = true;
            console.log("La app se inicio");
        }else{
            console.log("La app ya esta iniciada..");
        }
    }
    closeApp(){
        if(this.iniciada){
            this.iniciada = false;
            console.log("La app se cerro");
        }else{
            console.log("La app se encuentra cerrada");
        }
    }
    installApp(){
        if(!this.instalada){
            this.instalada = true;
            console.log("App instalada correctamente");
        }else{
            console.log("La app ya esta instalada");
        }
    }
    desinstallApp(){
        if(this.instalada){
            this.instalada = false;
            console.log("Se desinstalo la app correctamente");
        }else{
            console.log("La app esta");
        }
    }
    appInfo(){
        return `
        Descargas : ${this.descargas}
        Puntuacion: ${this.puntuacion}
        Peso: ${this.peso}
        `;
    }

}

const app = new App("16.000", "5 estrellas", "900mb");
console.log(app.appInfo());








