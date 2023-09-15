const toTop = document.querySelector(".to-top");
const menuBtn = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-navbar");

function disableScroll() {
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

    window.onscroll = function() {
        window.scrollTo(scrollLeft, scrollTop);
    };
}

function enableScroll() {
    window.onscroll = function() {};
}

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
});

menuBtn.addEventListener("click", function() {
    menuBtn.classList.toggle("is-active");
    mobileMenu.classList.toggle("is-active");
});