export default function loadHomePage() {
    const home = document.createElement("div");
    home.id = "home";
    home.className = "tab";
    home.innerHTML = "Home";

    const information = document.createElement("div");
    const informationParagraph = document.createElement("p");
    informationParagraph.innerHTML = "Hey there, fellow gym rat! We are here to provide delicious protein-filled meals that are perfect for your diet. Our menu is extensive and offers gym rats many options to choose from!";
    information.appendChild(informationParagraph);
    home.appendChild(information);

    const hours = document.createElement("div");
    const hoursTitle = document.createElement("h2");
    hoursTitle.innerHTML = "Hours";
    hours.appendChild(hoursTitle);
    home.appendChild(hours);

    const location = document.createElement("div");
    const locationParagraph = document.createElement("p");
    locationParagraph.innerHTML = "Champaign IL, 68120";
    location.appendChild(locationParagraph);
    home.appendChild(location);

    return home;
}