const tipButton = document.querySelectorAll(".tips-list li");
const tipContent = document.querySelectorAll(".tips-item-content");
const rotateBtn = document.querySelectorAll('.tips-item-btn');

for (let i = 0; i < tipButton.length; i++) {
  tipButton[i].addEventListener("click", () => {
    tipContent[i].classList.toggle("open-tip");
    rotateBtn[i].firstElementChild.classList.toggle("is-rotate");
    for (let j = 0; j < tipButton.length; j++) {
      if (j != i) {
        tipContent[j].classList.remove("open-tip");
        rotateBtn[j].firstElementChild.classList.remove("is-rotate");
      }
    }
  });
}
