const mainToggle = document.querySelector('[data-main-menu-toggle]')

mainToggle.addEventListener('click', function(e) {
    e.preventDefault();
    mainMenu.classList.remove('hidden');
    mainMenu.classList.add('visible');
});

--------------------

const mainClose = document.querySelectorAll('[data-main-close]')

mainClose.forEach(function(elem) {

    elem.addEventListener('click', function(e) {
        e.preventDefault();
        mainMenu.classList.add('hidden');
        mainMenu.classList.remove('visible');
    });  

});

--------------------

document.addEventListener('DOMContentLoaded', function () {
  // do something here ...
}, false);

--------------------

var x = document.getElementById('example');

var x = document.getElementsByClassName('example');

var x = document.querySelector('[data-example]');

--------------------

item3.classList.remove("active");

--------------------

image2.classList.add("active");

--------------------

if (window.matchMedia("(max-width: 799px)").matches) {}

--------------------

const body = document.querySelector('[data-mobile-menu-hide]');
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;

window.addEventListener("scroll", () => {
const currentScroll = window.pageYOffset;
if (currentScroll == 0) {
    body.classList.remove(scrollUp);
    return;
}

if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
    // down
    body.classList.remove(scrollUp);
    body.classList.add(scrollDown);
} else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
    // up
    body.classList.remove(scrollDown);
    body.classList.add(scrollUp);
}
lastScroll = currentScroll;
});






// Change selected dropdown data attribute value ----------------------- 
const totaalPrijs = '999';
const prijs_select = document.querySelector('.filter[name="service"]');
const prijs_option = prijs_select.options[prijs_select.selectedIndex];
prijs_option.setAttribute('data-price', totaalPrijs); 





