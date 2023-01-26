export default function loadMenuPage() {
    const menu = document.createElement("div");
    menu.id = "menu";
    menu.className = "tab";
    menu.innerHTML = "Menu";
    menu.style.display = "none";

    return menu;
}