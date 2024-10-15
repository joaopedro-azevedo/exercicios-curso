document
    .getElementById('mySquare')
    .addEventListener('click',function(){
        const squareMain = document.getElementById('mySquare');
        // console.log(squareMain);
        if(squareMain.classList.contains('blue')){
            squareMain.classList.remove('blue');
        }else{
            squareMain.classList.add('blue');
        }
    }
)

