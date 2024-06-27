import { loadHome } from "./home";
import { loadMenu } from "./menu";
import { loadAbout } from "./about";

document.addEventListener('DOMContentLoaded', (event) => {
    let homeBtn = document.querySelector("#home");
    let menuBtn = document.querySelector("#menu");
    let aboutBtn = document.querySelector("#about");
    homeBtn.addEventListener('click', loadHome);
    menuBtn.addEventListener('click', loadMenu);
    aboutBtn.addEventListener('click', loadAbout);
});