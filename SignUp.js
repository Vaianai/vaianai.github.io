document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("signup-form");
    form.addEventListener("submit", function(event) {
        const password = form.elements["password"].value;
        const confirmPassword = form.elements["confirm_password"].value;

        if (password !== confirmPassword) {
            event.preventDefault();
            alert("Passwords do not match!");
        }
    });
});
