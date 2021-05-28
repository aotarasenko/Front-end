const tipButton = document.querySelectorAll(".tips-list li");
const tipContent = document.querySelectorAll(".tips-item-content");
const rotateBtn = document.querySelectorAll(".tips-item-btn");
const tipTitle = document.querySelectorAll(".tips-item-title");

for (let i = 0; i < tipButton.length; i++) {
  tipButton[i].addEventListener("click", () => {
    tipContent[i].classList.toggle("open-tip");
    rotateBtn[i].firstElementChild.classList.toggle("is-rotate");
    tipTitle[i].classList.toggle("hide-pseudo");
    for (let j = 0; j < tipButton.length; j++) {
      if (j != i) {
        tipContent[j].classList.remove("open-tip");
        rotateBtn[j].firstElementChild.classList.remove("is-rotate");
        tipTitle[j].classList.remove("hide-pseudo");
      }
    }
  });
}
