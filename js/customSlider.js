const sliderBlock = document.querySelector('.slider-block');
const leftSliderArrow = document.querySelector('.arrow-left');
const rightSliderArrow = document.querySelector('.arrow-right');
const sliderList = document.querySelectorAll('.slider-list');
let slideTitle = document.querySelector('.slide-title');
let slideText = document.querySelector('.slide-text');

let sliderListItem = document.querySelectorAll('.slider-list-item');


for (let i = 0; i < sliderListItem.length; i++) {
    sliderListItem[i].addEventListener('click', () => {
        currentSlide = i;
        changeSlide(currentSlide);
    });
}
// for (let i = 0; i < sliderList.length; i++) {
//     for (let j = 0; j < 15; j++) {
//         sliderList[i].innerHTML += `
//             <li class="slider-list-item">
//                 Phishing/Spearphishi
//             </li>
//         `;
        
//     }
    
// }

let currentSlide = 0;
let currentList = 0;

function changeSlide(index) {
    sliderListItem = document.querySelectorAll('.slider-list-item');
    console.log(sliderListItem);
    if(currentSlide < 0){
        currentSlide = sliderListItem.length-1;
    }
    if(currentSlide == sliderListItem.length){
        currentSlide = 0;
    }

    sliderBlock.style.backgroundImage = `url('${slides[currentSlide]['img']}')`;
    slideTitle.textContent = `${slides[currentSlide]['title']}`;
    slideText.textContent = `${slides[currentSlide]['description']}`
    console.log(sliderListItem[index],currentSlide);

    for (let i = 0; i < sliderListItem.length; i++) {
        if(i == currentSlide){
            sliderListItem[i].classList.add('current-slide-item');
        }else{
            sliderListItem[i].classList.remove('current-slide-item');
        }
    }
}

function changeList(listIndex) {
    sliderListItem = document.querySelectorAll('.slider-list-item');
    if(currentList < 0){
        currentList = sliderList.length - 1;
    }
    if(currentList == sliderList.length){
        currentList = 0;
        currentSlide = 0;
    }
    for (let i = 0; i < sliderList.length; i++) {
        if(i != listIndex){
            sliderList[i].classList.add('hidden-list');
        }else{
            sliderList[i].classList.remove('hidden-list');
        }
        
    }
    console.log(sliderList[listIndex], listIndex);
}


leftSliderArrow.addEventListener('click', () => {
    changeList(currentList--);
    changeSlide(currentSlide);
});


rightSliderArrow.addEventListener('click', () => {
    changeList(currentList++);
    changeSlide(currentSlide);
});


if(window.innerWidth < 992){
    for (let i = 5; i < sliderListItem.length-6; i++) {
        sliderListItem[i].style.display = 'none'
        
    }
}