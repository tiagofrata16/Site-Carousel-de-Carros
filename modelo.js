const imgs = document.getElementById('fotos')
const img = document.querySelectorAll('#fotos img')

let idx = 0;

function carrossel(){
    idx++; /*cada imagem tera um id que aumenta em um*/

    if(idx > img.length - 1){ /*length -> quantidade de imagens*/
        idx = 0; /* retorna a imagem inicial */
    }

    imgs.style.transform = `translateX(${-idx * 645}px)`;/*DOM-faz as imgens voltarem de tras para frente*/
}

setInterval(carrossel, 5000); /* intervaulo - milisegundos*/