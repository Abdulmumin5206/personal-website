function loadHeader() {
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-container").innerHTML = data;
        })
        .catch(error => console.error("Error loading header:", error));
}
loadHeader();

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".about-section").classList.add("visible");
});
