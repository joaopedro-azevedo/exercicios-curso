const adviceUpdateButton = document.querySelector(".dice-button");
const adviceNumber = document.querySelector('.card-title');
const adviceDescription = document.querySelector('.advice-text');

async function getAdvice() {
    
    try{
        const response = await fetch ("https://api.adviceslip.com/advice");

        if (!response.ok){
            throw new Error ("Não foi possível acessar a API!")
        }

        const adviceContent = await response.json();
        const adviceId = `ADVICE #${adviceContent.slip.id}`;
        const adviceText = `"${adviceContent.slip.advice}"`;
    
        adviceNumber.innerText = adviceId;
        adviceDescription.innerText = adviceText;
    }

    
    catch (error) {
        console.error("Erro ao tentar buscar as informações da API", error);
    }

}

adviceUpdateButton.addEventListener("click", getAdvice);

getAdvice();
