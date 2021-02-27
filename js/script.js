let burger = document.body.querySelector('.burger');
let menu = document.body.querySelector('.menu');
burger.addEventListener('click', func);
function func() {
    menu.classList.toggle('active');
}

AOS.init();  