let header = this.document.querySelector("header");
let main_ = document.getElementsByClassName("main")[0];
let image = this.document.getElementById("toggler-theme");
let img_mail = this.document.getElementById("img-mail");
let img_github = this.document.getElementById("img-github");
let logo_navbar = this.document.getElementById("logo-navbar");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);

    if (main_.getAttribute("data-theme") == "default") {
        if (window.scrollY > 0) {
            image.setAttribute("src", "./img/icon/sun-light.png");
        } else {
            image.setAttribute("src", "./img/icon/sun-dark.png");
        }
    } else if (main_.getAttribute("data-theme") == "dark") {
        image.setAttribute("src", "./img/icon/moon.png");
    } else {
        console.log("[Scroll listener] Something is wrong...");
    }
});

document.getElementById("toggler-theme").addEventListener("click", (event) => {
    if (main_.getAttribute("data-theme") == "default") {
        main_.setAttribute("data-theme", "dark");
        image.setAttribute("src", "./img/icon/moon.png");
        img_mail.setAttribute("src", "./img/icon/mail-light.png");
        img_github.setAttribute("src", "./img/icon/github-light.png");
        logo_navbar.setAttribute("src", "./img/icon/favicon-dark.ico");
    } else if (main_.getAttribute("data-theme") == "dark") {
        main_.setAttribute("data-theme", "default");
        img_mail.setAttribute("src", "./img/icon/mail-dark.png");
        img_github.setAttribute("src", "./img/icon/github-dark.png");
        logo_navbar.setAttribute("src", "./img/icon/favicon-light.ico");

        if (window.scrollY > 0) {
            image.setAttribute("src", "./img/icon/sun-light.png");
        } else {
            image.setAttribute("src", "./img/icon/sun-dark.png");
        }
    } else {
        console.log("[Toggler listener] Something is wrong...");
    }
});

window.addEventListener("scroll", reveal);

function reveal() {
    let reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", helloAnimated);

function helloAnimated() {
    let greet = document.querySelector(".greet");

    let windowHeight = window.innerHeight;
    let greetTop = greet.getBoundingClientRect().top;
    let greetPoint = 150;

    if (greetTop < windowHeight - greetPoint) {
        greet.classList.add("hello");
    } else {
        greet.classList.remove("hello");
    }
}

function navbarResponsive() {
    var x = document.getElementById("my-topnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
