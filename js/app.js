
let random = document.getElementsByClassName("parpadear");
random = addEventListener("click",generarNumero);

function generarNumero(){
    let numero = Math.floor(Math.random()*10)+1;
    console.log(numero)
}


