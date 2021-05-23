const sliderBlock = document.querySelector('.slider-block');
const leftSliderArrow = document.querySelector('.arrow-left');
const rightSliderArrow = document.querySelector('.arrow-right');

const sliderSourse = ['0.jpg','1.jpg','2.jpg','3.jpg', '4.jpg'];
let sliderList = document.querySelectorAll('.slider-list-item');

let currentSlide = 1;

function changeSlide(index) {
    console.log(index);
    if(index == 0){
        currentSlide = sliderSourse.length-1;
    }else if (index == sliderSourse.length-1){
        currentSlide = 0;
    }
    console.log(index);
    sliderBlock.style.backgroundImage = `url('./images/slider-img-${sliderSourse[index]}')`;
    for (let i = 0; i < sliderList.length; i++) {
        if(i == index){
            sliderList[i].classList.add('current-slide-item');
        }else{
            sliderList[i].classList.remove('current-slide-item');
        }
        
    }
}


leftSliderArrow.addEventListener('click', () => {
    changeSlide(currentSlide--);
});


rightSliderArrow.addEventListener('click', () => {
    changeSlide(currentSlide++);
});