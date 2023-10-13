window.onload = function () {
    // Variables
    const ImagenesRecomend = [
        './img/blackhole.jpg',
        './img/radioactive.jpg',
        './img/futuristic.jpg'
    ];
    const TitulosRecomend = [
        'Titulo 1',
        'Titulo 2',
        'Titulo 3'
    ];
    const ImagenesTop = [
        './img/blackhole.jpg',
        './img/radioactive.jpg',
        './img/futuristic.jpg',
        './img/crystal.jpg',
        './img/clocktown.jpg'
    ];
    const TitulosTop = [
        'Titulo FD',
        'Titulo FGSA',
        'Titulo AS',
        'Titulo SD',
        'Titulo DD',
    ];
    let posicionActual = 0;
    let posicionActualTop = 0;
    let $botonRetroceder = document.querySelector('#retroceder');
    let $botonAvanzar = document.querySelector('#avanzar');
    let $imagen = document.querySelector('#imagen');
    let $botonRetrocederTop = document.querySelector('#retrocederTop');
    let $botonAvanzarTop = document.querySelector('#avanzarTop');
    let $imagenTop = document.querySelector('#imagenTop');
    // Funciones

    
    function pasarFoto() {
        if(posicionActual >= ImagenesRecomend.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarImagen();
    }

    function retrocederFoto() {
        if(posicionActual <= 0) {
            posicionActual = ImagenesRecomend.length - 1;
        } else {
            posicionActual--;
        }
        renderizarImagen();
    }

    //---------------------

    function pasarFotoTop() {
        if(posicionActualTop >= ImagenesTop.length - 1) {
            posicionActualTop = 0;
        } else {
            posicionActualTop++;
        }
        renderizarTopImagen();
    }

    function retrocederFotoTop() {
        if(posicionActualTop <= 0) {
            posicionActualTop = ImagenesTop.length - 1;
        } else {
            posicionActualTop--;
        }
        renderizarTopImagen();
    }
    
    //-----------------------------

    function renderizarImagen () {
        document.getElementById("titulo").innerHTML = TitulosRecomend[posicionActual];
        $imagen.style.backgroundImage = `url(${ImagenesRecomend[posicionActual]})`;
    }

    function renderizarTopImagen () {
        document.getElementById("titulo Top").innerHTML = TitulosTop[posicionActualTop];
        $imagenTop.style.backgroundImage = `url(${ImagenesTop[posicionActualTop]})`;
    }

    // Eventos
    $botonAvanzar.addEventListener('click', pasarFoto);
    $botonRetroceder.addEventListener('click', retrocederFoto);

    $botonAvanzarTop.addEventListener('click', pasarFotoTop);
    $botonRetrocederTop.addEventListener('click', retrocederFotoTop);

    // Iniciar
    renderizarImagen();
    renderizarTopImagen();
} 