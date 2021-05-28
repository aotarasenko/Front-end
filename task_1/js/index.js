const burgerMenu = document.querySelector(".nav-menu-active");
const menuList = document.querySelector(".nav-list");
const header = document.querySelector("header");
const navBlock = document.querySelector(".nav");
const tabsNav = document.querySelector(".tabs-nav");

window.addEventListener("resize", () => {
  if (window.matchMedia("min-width: 992px")) {
    menuList.classList.remove("visible-list");
    burgerMenu.classList.remove("open");
  }
});

burgerMenu.addEventListener("click", () => {
  menuList.classList.toggle("visible-list");
  burgerMenu.classList.toggle("open");
  if (menuList.classList.contains("visible-list")) {
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
  }
});

window.addEventListener("scroll", () => {
  let computedOffset =
    parseInt(getComputedStyle(header).height) -
    parseInt(getComputedStyle(tabsNav).top);
  if (window.pageYOffset > 1) {
    navBlock.classList.add("fixed-block");
  } else {
    navBlock.classList.remove("fixed-block");
  }
  if (window.pageYOffset > computedOffset) {
    tabsNav.classList.add("fixed-tabs");
  } else {
    tabsNav.classList.remove("fixed-tabs");
  }
});
