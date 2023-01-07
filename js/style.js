const menu = document.querySelector(".covid__menu");
if (menu) {
    menu.querySelector("i").addEventListener("click", () => {
        menu.classList.add("is-active");
    });

    menu.querySelector(".covid__menu__area").addEventListener("click", () => {
        menu.classList.remove("is-active");
    });
}