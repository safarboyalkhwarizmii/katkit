document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.getElementById("login-button");

    loginButton.addEventListener("click", (event) => {
        event.preventDefault();

        let email = document.getElementById("email");
        let password = document.getElementById("password");
        login(email, password);
    })

})

