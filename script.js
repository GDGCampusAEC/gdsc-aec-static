/* add event listeners here */
const hamburger = document.querySelector(".hamberg");
const menu = document.querySelector(".menu");

let isOpen = false;

hamburger.addEventListener('click', function () {
    if (!isOpen) {
        menu.style.display = "block";
        isOpen = true;
    } else {
        menu.style.display = "none";
        isOpen = false;
    }
});
