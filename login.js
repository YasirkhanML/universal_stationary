function validateForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Clear previous error message
    errorMessage.textContent = "";

    // Validation logic
    if (username === "" || password === "") {
        errorMessage.textContent = "Both fields are required!";
        errorMessage.style.opacity = 1;  // Show error message
        return false;
    }

    // Successful validation
    errorMessage.style.opacity = 0;  // Hide error message
    return true; // Form is valid
}
