const burgerMenu = document.querySelector('.nav-menu-active')
const menuList = document.querySelector('.nav-list')
const header = document.querySelector('header')
const navBlock = document.querySelector('.nav')

burgerMenu.addEventListener('click', () => {
    menuList.classList.toggle('visible-list')
    burgerMenu.classList.toggle('open')
    if (menuList.classList.contains('visible-list')) {
        document.body.classList.add('no-scroll')
    } else {
        document.body.classList.remove('no-scroll')
    }
})

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 1) {
        navBlock.classList.add('fixed-block')
    } else {
        navBlock.classList.remove('fixed-block')
    }
})
