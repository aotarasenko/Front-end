const getAnswerBtn = document.querySelectorAll('.get-answer-btn');
const answerBlocks = document.querySelectorAll('.answer');

for (let  i = 0; i < getAnswerBtn.length; i++) {
    getAnswerBtn[i].addEventListener('click', ()=> {
        answerBlocks[i].classList.toggle('open-answer');
        getAnswerBtn[i].classList.toggle('answer-icon-rotate');
        for (let index = 0; index < answerBlocks.length; index++) {
            if(index != i){
                answerBlocks[index].classList.remove('open-answer');
                getAnswerBtn[index].classList.remove('answer-icon-rotate');
            }
            
        }
    });
    
}