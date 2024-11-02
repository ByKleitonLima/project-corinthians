
// Carrossel 

const box = document.querySelector(".container--2");
const imagens = document.querySelectorAll(".container--2 img");

let contador = 0;

function slider() {
    contador++;

    if(contador > imagens.length -1) {
        contador = 0;
    }

    box.style.transform = `translateX(${-contador * 1440}px)`
}

setInterval(slider, 4000);
// Carrossel Fim !