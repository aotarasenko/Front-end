const sliderBlock = document.querySelector('.slider-block');
const leftSliderArrow = document.querySelector('.arrow-left');
const rightSliderArrow = document.querySelector('.arrow-right');
let sliderList = document.querySelectorAll('.slider-list-item');
const sliderSourse = ['0.jpg','1.jpg','2.jpg','3.jpg', '4.jpg'];


let currentSlide = 1;

function changeSlide(index) {
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

setInterval(()=>{
    if(currentSlide == sliderSourse.length){
        currentSlide = 0;
    }
    changeSlide(currentSlide++);
}, 5000);


leftSliderArrow.addEventListener('click', () => {
    if(currentSlide < 0){
        currentSlide = sliderSourse.length-1;
    }
    changeSlide(currentSlide--);
});


rightSliderArrow.addEventListener('click', () => {
    if(currentSlide == sliderSourse.length){
        currentSlide = 0;
    }
    changeSlide(currentSlide++);
});