export default function loadHomePage() {
    const home = document.createElement("div");
    home.id = "home";
    home.className = "tab";
    home.innerHTML = "Home";

    return home;
}