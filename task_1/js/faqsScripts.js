const getAnswerBtn = document.querySelectorAll(".faqs-list li");
const answerBlocks = document.querySelectorAll(".answer");
const answerArrow = document.querySelectorAll(".get-answer-btn");

for (let i = 0; i < getAnswerBtn.length; i++) {
  getAnswerBtn[i].addEventListener("click", () => {
    answerBlocks[i].classList.toggle("open-answer");
    answerArrow[i].classList.toggle("answer-icon-rotate");
    for (let index = 0; index < answerBlocks.length; index++) {
      if (index != i) {
        answerBlocks[index].classList.remove("open-answer");
        answerArrow[index].classList.remove("answer-icon-rotate");
      }
    }
  });
}
