window.onload = function() {
    var loginLink = document.querySelector(".navbarParent ul li:first-child a");
    if (sessionStorage.getItem("JWT")) {
        loginLink.textContent = "Logout";
        loginLink.href = "Logout.html"; 
    } else {
        loginLink.textContent = "Prijavi se";
        loginLink.href = "Prijavise.html";
    }
}
