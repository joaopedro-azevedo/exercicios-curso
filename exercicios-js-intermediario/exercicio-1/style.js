document
    .querySelector("button[class='buttonChangeColor']")
    .addEventListener('click',function(){
        const segundoQuadrado = document.getElementsByClassName('segundo')

        console.log(segundoQuadrado);

        // Demorei para solucionar pois esqueci de selecionar o elemento da lista que eu dejejava acessar
        
        segundoQuadrado[0].classList.add('mudar-de-cor')
    }
)