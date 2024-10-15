const bkg = document.querySelectorAll('.container');
const bkgImg = document.querySelectorAll('.background-img')
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

console.log(bkg);
console.log(bkgImg);

let index = 0;

function slide(index){
    const offset = -index * 100;
    bkg.style.transform = `translateX(${offset}%)`
}

prevButton.addEventListener('click', () => {
    index = (index > 0) ? index -1 : bkgImg.length -1;
    slide(index);
})

nextButton.addEventListener('click', () => {
    index = (index < bkgImg - 1) ? index + 1 : 0;
    slide(index);
})

slide(index);

