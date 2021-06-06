$(document).ready(function(){
    $('.slider').slick({
        nextArrow: false,
        prevArrow: false,
        autoPlay: true,
        autoplaySpeed: 300,
        slidesToScroll: 1,
        slidesToShow: 1,
        swipe: true,
        dots: true,
    });

    const slickButtons = document.querySelectorAll('.slick-dots li button');
    for (let i = 0; i < slickButtons.length; i++) {
      slickButtons[i].textContent = '';
    }
});