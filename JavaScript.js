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







Fetch aggregated rating from trustpilot

Add this to HTML <span data-aggregatedservicerating=""></span>

------------------------------

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    if(parent && el) {
        return parent.appendChild(el);
    }
    return false;
}

const aggregatedservicerating = document.querySelector("[data-aggregatedservicerating]");

function handleErrors(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }

function aggregatedrating() {
        const self = this;
        fetch(`https://api.trustpilot.com/v1/business-units/4bf0fce800006400050c6761/?apikey=0SUVte6GJPYYD8rVAdn5g1X1OvmDSOoG&name=sensiseeds.com`, {
            method: "GET",
        })
        .then(self.handleErrors)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let strong = createNode('strong');
            strong.innerHTML = `${data.score.trustScore}`;
            append(aggregatedservicerating, strong);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
   // aggregatedrating();




