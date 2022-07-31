let header = this.document.querySelector("header");
let main_ = document.getElementsByClassName("main")[0];
let image = this.document.getElementById("toggler-theme");
let img_mail = this.document.getElementById("img-mail");
let img_github = this.document.getElementById("img-github");
let logo_navbar = this.document.getElementById("logo-navbar");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);

    let image = this.document.getElementById("toggler-theme");
    if (window.scrollY == 0 && main_.getAttribute("data-theme") == "default") {
        image.setAttribute("src", "./img/icon/sun-dark.png");
    } else if (
        window.scrollY > 0 &&
        main_.getAttribute("data-theme") == "default"
    ) {
        image.setAttribute("src", "./img/icon/sun-light.png");
    } else if (
        window.scrollY == 0 &&
        main_.getAttribute("data-theme") == "dark"
    ) {
        image.setAttribute("src", "./img/icon/moon.png");
    } else if (
        window.scrollY > 0 &&
        main_.getAttribute("data-theme") == "dark"
    ) {
        image.setAttribute("src", "./img/icon/moon.png");
    } else {
        console.log("Something is wrong...");
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
