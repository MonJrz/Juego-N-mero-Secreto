let númeroSecreto = 0;
let intentos = 0;
let listaNúmerosSorteados = [];
let númeroMáximo = 10;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
return;
}

function verificarIntento() {
   let númeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
   
  // console.log(númeroSecreto);
   if (númeroDeUsuario === númeroSecreto){
    asignarTextoElemento ('p', `¡Acertaste el número secreto! Lo intentaste ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
   } else {
    if (númeroDeUsuario > númeroSecreto) {
        asignarTextoElemento ('p', 'El número es menor');
    } else {
        asignarTextoElemento( 'p', 'El número es mayor');
    }
    intentos++;
    limpiarCaja();
   }
    return;
}

function limpiarCaja () {
   document.querySelector('#valorUsuario').value = '';
}

function generarNúmeroSecreto() {
    let númeroGenerado = Math.floor (Math.random ()*númeroMáximo)+1;
    //console.log (númeroGenerado);
   // console.log(listaNúmerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNúmerosSorteados.length == númeroMáximo) {
        asignarTextoElemento ('p', 'Ya se sortearon todos los números posibles. Gracias por jugar')
    } else {

    //Si el número generado está incluido en la lista
    if (listaNúmerosSorteados.includes(númeroGenerado)) {
        return generarNúmeroSecreto ();
    } else {
            listaNúmerosSorteados.push(númeroGenerado);
            return númeroGenerado;
         }
    }
}


function condicionesIniciales (){
    asignarTextoElemento('h1', 'Juego del número secreto UwU');
asignarTextoElemento('p', ` Escribe un número entre el 1 y el ${númeroMáximo}`);
númeroSecreto = generarNúmeroSecreto();
intentos=1;
}

function reiniciarJuego () {
    //Limpiar la caja
    limpiarCaja();
    //Condiciones iniciales
    condicionesIniciales();
    //Deshabilitar el botón de 'Nuevo Juego'
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

    
}

condicionesIniciales();