window.addEventListener("scroll", function () {
    let header = this.document.querySelector("header");
    let main_ = document.getElementsByClassName("main")[0];
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
    let main_ = document.getElementsByClassName("main")[0];

    let image = this.document.getElementById("toggler-theme");
    console.log(main_.getAttribute("data-theme"));
    if (main_.getAttribute("data-theme") == "dark" && window.scrollY == 0) {
        image.setAttribute("src", "./img/icon/sun-dark.png");
        main_.setAttribute("data-theme", "default");
    } else if (
        main_.getAttribute("data-theme") == "dark" &&
        window.scrollY > 0
    ) {
        image.setAttribute("src", "./img/icon/sun-light.png");
        main_.setAttribute("data-theme", "default");
    } else if (
        main_.getAttribute("data-theme") == "default" &&
        window.scrollY == 0
    ) {
        image.setAttribute("src", "./img/icon/moon.png");
        main_.setAttribute("data-theme", "dark");
    } else if (
        main_.getAttribute("data-theme") == "default" &&
        window.scrollY > 0
    ) {
        image.setAttribute("src", "./img/icon/moon.png");
        main_.setAttribute("data-theme", "dark");
    } else {
        console.log("Something is wrong...");
    }
});
