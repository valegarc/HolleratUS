document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var usernameInput = document.getElementById("username").value;
    var passwordInput = document.getElementById("password").value;

    if (usernameInput === "user" && passwordInput === "pass") {
        document.getElementById("loginStatus").textContent = "Login successful!";
        window.location.href = "adminHome.html";
    } else {
        document.getElementById("loginStatus").textContent = "Invalid username or password.";
    }
});