//función menú selección
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links a');
    console.log(opciones.className)
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado"

    //el menú desaparece cuando se selecciona una opción
    var x = document.getElementById('nav');
    x.className = "";
}
//función menú responsive
function resposiveMenu() {
    var x = document.getElementById('nav');
    if(x.className === "" ){
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

/* Slider skills*/

const carrusel = document.querySelector('.carrusel-items');

let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
let intervalo = null
let step = 1.5
let aux = 0

const start = () => {
    intervalo = setInterval(function () {
        carrusel.scrollLeft = carrusel.scrollLeft + step;
        if (carrusel.scrollLeft === aux) {
            step = step * -1
        } else {
            if (carrusel.scrollLeft === 0) {
                step = step * -1
            }
        }
        aux = carrusel.scrollLeft
    }, 10);
};

const stop = () => {
    clearInterval(intervalo);
}

carrusel.addEventListener('mouseover', () => {
    stop();
});

carrusel.addEventListener('mouseout', () => {
    start();
});
