export default function loadAboutPage() {
    const about = document.createElement("div");
    about.id = "about";
    about.className = "tab";
    about.innerHTML = "About";
    about.style.display = "none";

    return about;
}