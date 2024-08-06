document.addEventListener("DOMContentLoaded", function() {
    const toggleFormButton = document.getElementById("toggleFormButton");
    const popupForm = document.getElementById("popupForm");
    const closeButton = document.getElementById("closeButton");

    toggleFormButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior
        popupForm.style.display = "flex";
    });

    closeButton.addEventListener("click", function() {
        popupForm.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target == popupForm) {
            popupForm.style.display = "none";
        }
    });
});

var CurrentYear = new Date().getFullYear();
document.querySelector(".copyright").textContent = "© " + CurrentYear +" Mission Mittelstand. Alle Rechte vorbehalten.";
