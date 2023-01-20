document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.getElementById("login-button");

    loginButton.addEventListener("click", (event) => {
        event.preventDefault();

        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        login(email, password);
    })

})

