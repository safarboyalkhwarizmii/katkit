document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.getElementById("register-button");

    loginButton.addEventListener("click", (event) => {
        event.preventDefault();

        let name = document.getElementById("name");
        let surname = document.getElementById("surname");
        let email = document.getElementById("email");
        let password = document.getElementById("password");
        register(name, surname, email, password);
    })

})

