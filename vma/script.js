let users = {}; // Temporary storage for user data

// Login Function
function loginUser() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if (email in users && users[email] === password) {
        message.style.color = "green";
        message.innerText = "Login successful! Redirecting...";
        setTimeout(() => alert("Welcome to MEDIBOT AI!"), 1000); // Replace with redirection to home page
    } else {
        message.style.color = "red";
        message.innerText = "Invalid email or password.";
    }
}

// Signup Function
function signupUser() {
    const name = document.getElementById("signup-name").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const message = document.getElementById("signup-message");

    if (name && email && password) {
        if (email in users) {
            message.style.color = "red";
            message.innerText = "Email already exists!";
        } else {
            users[email] = password; // Store user data
            message.style.color = "green";
            message.innerText = "Signup successful! You can now login.";
        }
    } else {
        message.style.color = "red";
        message.innerText = "Please fill in all fields.";
    }
}

// Toggle Login/Signup
function toggleSignup() {
    const loginSection = document.querySelector(".login-section");
    const signupSection = document.querySelector(".signup-section");

    if (loginSection.style.display === "none") {
        loginSection.style.display = "block
