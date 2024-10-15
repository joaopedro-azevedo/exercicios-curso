const inputBox = document.querySelectorAll('.input-text');

console.log(inputBox);

inputBox.forEach(input => {
        input.addEventListener('change',() => {
                if (input.value !== ""){
                    input.classList.add('borderGreen')
                }else{
                    input.classList.remove('borderGreen')
                }
            }
        );
    }
);



