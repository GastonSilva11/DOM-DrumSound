const botonUno = document.querySelector("#botonUno");
const botonDos = document.querySelector("#botonDos");
const botonTres = document.querySelector("#botonTres");
const botonCuatro = document.querySelector("#botonCuatro");
const botonCinco = document.querySelector("#botonCinco");
const botonSeis = document.querySelector("#botonSeis");
const botonSiete = document.querySelector("#botonSiete");


const audioUno = document.querySelector(".audioUno");
const audioDos = document.querySelector(".audioDos");
const audioTres = document.querySelector(".audioTres");
const audioCuatro = document.querySelector(".audioCuatro");
const audioCinco = document.querySelector(".audioCinco");
const audioSeis = document.querySelector(".audioSeis");
const audioSiete = document.querySelector(".audioSiete");

botonUno.addEventListener("click" , function(){
    audioUno.play();
} )

botonDos.addEventListener("click" , function(){
    audioDos.play();
} )

botonTres.addEventListener("click" , function(){
    audioTres.play();
} )

botonCuatro.addEventListener("click" , function(){
    audioCuatro.play();
} )

botonCinco.addEventListener("click" , function(){
    audioCinco.play();
} )

botonUno.addEventListener("click" , function(){
    audioSeis.play();
} )


document.addEventListener("keydown" , function(e){
   
    console.log(e);
} )



