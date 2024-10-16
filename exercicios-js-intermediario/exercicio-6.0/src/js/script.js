const questions = document.querySelectorAll(".question");

questions.forEach(function(item) {
    item.addEventListener("click", function(){
        const activeQuestion = document.querySelector(".show");
        activeQuestion.classList.remove("show");

        item.classList.add("show");
    })
})







