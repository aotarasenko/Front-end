const tipButton = document.querySelectorAll('.tips-item-btn');
const tipContent = document.querySelectorAll('.tips-item-content');
const tipNumber = document.querySelectorAll('.tips-item-number');

let currentTip = 0

for (let i = 0; i < tipButton.length; i++) {
    tipButton[i].addEventListener('click', (Event) => {
        tipContent[i].classList.toggle('open-tip');
        tipButton[i].firstElementChild.classList.toggle('is-rotate');
        tipNumber[i].classList.toggle('no-displayed')
        for (let j = 0; j < tipButton.length; j++) {
            if(j != i){
                tipContent[j].classList.remove('open-tip');
                tipButton[j].firstElementChild.classList.remove('is-rotate');
                tipNumber[j].classList.remove('no-displayed')
            }
        }
    });
}