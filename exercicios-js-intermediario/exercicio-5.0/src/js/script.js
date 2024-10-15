const images = document.querySelectorAll('.slide');
const prevArrow = document.getElementById("prev-arrow");
const nextArrow = document.getElementById("next-arrow");

let imgCurrent = 0;

nextArrow.addEventListener('click', function(){
    
    if(imgCurrent === images.length -1){
        return;
    }

    hideImg();

    imgCurrent++;

    images[imgCurrent].classList.add("show");

    showOrHideArrow();
});

prevArrow.addEventListener('click', function(){
    
    if(imgCurrent === 0){
        return;
    }

    hideImg();

    imgCurrent--;

    images[imgCurrent].classList.add("show");

    showOrHideArrow();
});

function hideImg(){
    const imgOpen = document.querySelector(".show");

    imgOpen.classList.remove("show");
}

function showOrHideArrow(){
    const notIsFristImg = imgCurrent !== 0;
    
    if(notIsFristImg){
        prevArrow.classList.remove("opacity");
    } else{
        prevArrow.classList.add("opacity");
    }

    const lastImg = imgCurrent !== 0 && imgCurrent === images.length -1;

    if(lastImg){
        nextArrow.classList.add("opacity");
    } else {
        nextArrow.classList.remove("opacity");
    }
}

// Posso criar uma function com a função repetida deixando o código mais clean ficando:

/* 
const images = document.querySelectorAll('.slide');
const prevArrow = document.getElementById("prev-arrow");
const nextArrow = document.getElementById("next-arrow");

let imgCurrent = 0;

nextArrow.addEventListener('click', function(){
    
    if(imgCurrent === images.length -1){
        return;
    }

    imgCurrent++;

    hideImg();
    showImg();
    showOrHideArrow();
});

prevArrow.addEventListener('click', function(){
    
    if(imgCurrent === 0){
        return;
    }

    imgCurrent--;

    hideImg();
    showImg();
    showOrHideArrow();
});

function hideImg(){
    const imgOpen = document.querySelector(".show");

    imgOpen.classList.remove("show");
}

function showImg(){
    images[imgCurrent].classList.add("show");
}

function showOrHideArrow(){
    const notIsFristImg = imgCurrent !== 0;
    
    if(notIsFristImg){
        prevArrow.classList.remove("opacity");
    } else{
        prevArrow.classList.add("opacity");
    }

    const lastImg = imgCurrent !== 0 && imgCurrent === images.length -1;

    if(lastImg){
        nextArrow.classList.add("opacity");
    } else {
        nextArrow.classList.remove("opacity");
    }
}

*/

