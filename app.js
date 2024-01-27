/*
let titulo = document.querySelector("h1");
titulo.innerHTML = "Juego del número Secreto";

let parrafo = document.querySelector("p");
parrafo.innerHTML = "Introduce un número del 1 al 10";

function intentoDeUsuario() {
    alert("Click desde el botón");
}
*/

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

//console.log (numeroSecreto);

function asignarTextoElemento(elemento,texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorDeUsuario").value);
    //console.log (numeroDeUsuario);
    //console.log (typeof(numeroDeUsuario));
    //console.log (numeroSecreto);
    //console.log (typeof(numeroSecreto));
    //console.log (numeroSecreto === numeroDeUsuario);

    if (numeroSecreto === numeroDeUsuario) {
        asignarTextoElemento ("p", `Acertaste el número en ${intentos} ${(intentos===1)? "intento" : "intentos"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else { 
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento ("p", "El número secreto es menor");
        } else {
            asignarTextoElemento ("p", "El número secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector("#valorDeUsuario").value = " ";
    
}

function condicionesIniciales() {
    asignarTextoElemento ("h1", "Juego del numero secreto");
    asignarTextoElemento ("p", `Introduce un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    if (listaNumerosSorteados == numeroMaximo) {
        asignarTextoElemento ("p", "Ya se han sorteado todos los números posibles.");

    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector("#reiniciar").setAttribute("disabled",true);
}

condicionesIniciales();