document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.getElementById("register-button");

    loginButton.addEventListener("click", (event) => {
        event.preventDefault();

        let name = document.getElementById("name").value;
        let surname = document.getElementById("surname").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        register(name, surname, email, password);
    })

})
