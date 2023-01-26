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

    const headerButtons = document.createElement("div");
    headerButtons.className = "header-buttons";

    const restaurantHeader = document.createElement("div");
    restaurantHeader.className = "header-icon";

    const restaurantName = document.createElement("h1");
    restaurantName.innerHTML = "Gym Bro Restaurant";

    const restaurantImage = document.createElement("img");
    restaurantImage.src = "../src/media/gymbro.png";
    restaurantImage.id = "gymbro-img";

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

    restaurantHeader.appendChild(restaurantName);
    restaurantHeader.appendChild(restaurantImage);
    header.appendChild(restaurantHeader);

    headerButtons.appendChild(homeButton);
    headerButtons.appendChild(menuButton);
    headerButtons.appendChild(aboutButton);
    header.appendChild(headerButtons);

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

