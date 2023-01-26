import loadHomePage from "./home";
import loadMenuPage from "./menu";
import loadAboutPage from "./about";
import './style.css';

function openTab(tabName) {
    const tabs = document.getElementsByClassName("tab");
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}

function loadPage() {
    const content = document.getElementById("content");

    const header = document.createElement("div");
    header.className = "header";

    const homeButton = document.createElement("button");
    homeButton.innerHTML = "Home";
    homeButton.addEventListener('click', (event) => {
        openTab("home");
    });
    const menuButton = document.createElement("button");
    menuButton.innerHTML = "Menu";
    menuButton.addEventListener('click', (event) => {
        openTab("menu");
    });
    const aboutButton = document.createElement("button");
    aboutButton.innerHTML = "About";
    aboutButton.addEventListener('click', (event) => {
        openTab("about");
    });

    header.appendChild(homeButton);
    header.appendChild(menuButton);
    header.appendChild(aboutButton);

    content.appendChild(header)

    const container = document.createElement("div");
    container.className = "container";

    const homeDiv = loadHomePage();
    const menuDiv = loadMenuPage();
    const aboutDiv = loadAboutPage();

    container.appendChild(homeDiv);
    container.appendChild(menuDiv);
    container.appendChild(aboutDiv);

    content.appendChild(container);
}

loadPage();

