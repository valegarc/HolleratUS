
const digit1 = document.getElementById("digit1");
const digit2 = document.getElementById("digit2");
const digit3 = document.getElementById("digit3");
const digit4 = document.getElementById("digit4");


digit1.addEventListener("input", function() {
    if (digit1.value.length === 1) {
        digit2.focus();
    }
});

digit2.addEventListener("input", function() {
    if (digit2.value.length === 1) {
        digit3.focus();
    }
});

digit3.addEventListener("input", function() {
    if (digit3.value.length === 1) {
        digit4.focus();
    }
});


digit2.addEventListener("keydown", function(e) {
    if (e.key === "Backspace" && digit2.value.length === 0) {
        digit1.focus();
    }
});

digit3.addEventListener("keydown", function(e) {
    if (e.key === "Backspace" && digit3.value.length === 0) {
        digit2.focus();
    }
});

digit4.addEventListener("keydown", function(e) {
    if (e.key === "Backspace" && digit4.value.length === 0) {
        digit3.focus();
    }
});

digit2.addEventListener("keydown", function(e) {
    if (e.key.match(/[0-9]/) && digit1.value.length === 0) {
        e.preventDefault();
    }
});

digit3.addEventListener("keydown", function(e) {
    if (e.key.match(/[0-9]/) && digit2.value.length === 0) {
        e.preventDefault();
    }
});

digit4.addEventListener("keydown", function(e) {
    if (e.key.match(/[0-9]/) && digit3.value.length === 0) {
        e.preventDefault();
    }
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = digit1.value + digit2.value + digit3.value + digit4.value;

    if (username === "1234") {
        document.getElementById("loginStatus").textContent = "Login successful!";
        window.location.href = "operatorHome.html";
    } else {
        document.getElementById("loginStatus").textContent = "Invalid username.";
    }
});