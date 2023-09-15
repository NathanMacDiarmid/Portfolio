const toTop = document.querySelector(".to-top");
const menuBtn = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-navbar");

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
    document.body.classList.toggle("disable-scrolling");
});