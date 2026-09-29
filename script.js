function envoyerMessage(event) {
    event.preventDefault();

    alert("Merci ! Votre message a été envoyé avec succès. ✅");
}


function toggleTheme() {

    document.body.classList.toggle("light-mode");

    const button = document.getElementById("themeBtn");

    if (document.body.classList.contains("light-mode")) {
        button.innerHTML = "🌙 Dark Mode";
        localStorage.setItem("theme", "light");
    } else {
        button.innerHTML = "☀️ Light Mode";
        localStorage.setItem("theme", "dark");
    }
}


if (localStorage.getItem("theme") === "light") {

    document.body.classList.add("light-mode");

    const button = document.getElementById("themeBtn");

    if (button) {
        button.innerHTML = "🌙 Dark Mode";
    }
}