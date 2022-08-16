
let random;

function  Random(){
    random = Math.floor( Math.random() * (10 - 1) + 1);
    console.log(random)
}


function Adivinar(){
    let adivinar = document.getElementById("numeroMagico").value;

    if(adivinar== random){
        alert("felicitaciones adivinaste el numero magico")
    }else{
        if(adivinar < random){
            alert("tu numero es menor que el numero magico")
        }else{
            alert("tu numero es mayor que el numero el magico")
        }
    }

}








