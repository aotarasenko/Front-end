const burgerMenu = document.querySelector('.nav-menu-active');
const menuList = document.querySelector('.nav-list');
const header = document.querySelector('header');
const navBlock = document.querySelector('.nav');
const tabsNav = document.querySelector('.tabs-nav');





window.addEventListener('resize', (Event) =>{
    if(window.innerWidth > 992){
        menuList.classList.remove('visible-list');
        burgerMenu.classList.remove('open');
    }
});

burgerMenu.addEventListener('click', (Event) => {
    if(window.innerWidth < 992){
        menuList.classList.toggle('visible-list');
        burgerMenu.classList.toggle('open');
        if(menuList.classList.contains('visible-list')){
            document.body.classList.add('no-scroll')
        }else{
            document.body.classList.remove('no-scroll')
        }
        
    }
    
    
});

window.addEventListener('scroll', () => {
    if(window.pageYOffset > 1){
        navBlock.classList.add('fixed-block');   
    }else{
        navBlock.classList.remove('fixed-block');
    }
    if(window.pageYOffset > 120) {
        tabsNav.classList.add('fixed-tabs');
    }else{
        tabsNav.classList.remove('fixed-tabs')
    }
});