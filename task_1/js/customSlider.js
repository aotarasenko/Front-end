const sliderBlock = document.querySelector(".slider-block");
const leftSliderArrow = document.querySelector(".arrow-left");
const rightSliderArrow = document.querySelector(".arrow-right");
const sliderList = document.querySelectorAll(".slider-list");
const slideTitle = document.querySelector(".slide-title");
const slideText = document.querySelector(".slide-text");

let sliderListItem = document.querySelectorAll(".slider-list-item");
let currentList = 0;

for (let i = 0; i < sliderListItem.length; i++) {
  sliderListItem[i].addEventListener("click", () => {
    currentSlide = i;
    changeSlide(currentSlide);
  });
}

function changeSlide(index) {
  sliderListItem = document.querySelectorAll(".slider-list-item");
  if (currentSlide < 0) {
    currentSlide = sliderListItem.length - 1;
  }
  if (currentSlide == sliderListItem.length) {
    currentSlide = 0;
  }

  sliderBlock.style.backgroundImage = `url('${slides[currentSlide]["img"]}')`;
  slideTitle.textContent = `${slides[currentSlide]["title"]}`;
  slideText.textContent = `${slides[currentSlide]["description"]}`;

  for (let i = 0; i < sliderListItem.length; i++) {
    if (i == currentSlide) {
      sliderListItem[i].classList.add("current-slide-item");
    } else {
      sliderListItem[i].classList.remove("current-slide-item");
    }
  }
}

function changeList(listIndex) {
  sliderListItem = document.querySelectorAll(".slider-list-item");
  if (currentList < 0) {
    currentList = sliderList.length - 1;
  }
  if (currentList == sliderList.length) {
    currentList = 0;
    currentSlide = 0;
  }
  for (let i = 0; i < sliderList.length; i++) {
    if (i != listIndex) {
      sliderList[i].classList.add("hidden-list");
    } else {
      sliderList[i].classList.remove("hidden-list");
    }
  }
}

leftSliderArrow.addEventListener("click", () => {
  changeList(currentList--);
  changeSlide(currentSlide);
});

rightSliderArrow.addEventListener("click", () => {
  changeList(currentList++);
  changeSlide(currentSlide);
});

if (!window.matchMedia(992)) {
  for (let i = 5; i < sliderListItem.length - 6; i++) {
    sliderListItem[i].style.display = "none";
  }
}
