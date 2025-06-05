// Check if consent was already given
if (localStorage.getItem("cookieAccepted") === "true") {
    document.getElementById("cookieBox").style.display = "none";
}

// Add click handler
document.getElementById("acceptCookies").addEventListener("click", function () {
    localStorage.setItem("cookieAccepted", "true");
    document.getElementById("cookieBox").style.display = "none";
});
