
const titulo = document.querySelector(".titulo");
titulo.classList.add("grande");

const subtitulo = document.querySelector(".subtitulo");
subtitulo.classList.remove("nuevo");

const titulo3 = document.querySelector(".nuevo");
let valor = titulo3.classList.item(2);
console.log(valor);
document.write(valor);