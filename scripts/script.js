"use strict"
document.addEventListener("DOMContentLoaded", () => {
    const token = localStorage.getItem('token')
    if (token == null) {
        if (window.location.pathname === "/registration/") {

        } else if (!(window.location.pathname === "/login/")) {
            window.location.replace("/login/");
        }

    } else {
        if (window.location.pathname === "/") {

        } else {
            window.location.replace("/");
        }
    }
})

function login(email, password) {
    let userObj = {email: email, password: password};
    let jsonBody = JSON.stringify(userObj);

    fetch("https://katkit.azurewebsites.net/auth/authorization", {
        method: "POST",
        headers: {
            "Accept-language": "EN",
            "Content-Type": "application/json"
        },
        body: jsonBody
    })
        .then(response => response.json())
        .then((data) => {
            console.log(data)
            localStorage.setItem('token', data.token);
            localStorage.getItem('token')
            window.location.replace("/");
        })
}

function register(name, surname, email, password) {
    let userObj = {name: name, surname: surname, email: email, password: password};
    let jsonBody = JSON.stringify(userObj);

    fetch("https://katkit.azurewebsites.net/auth/registration", {
        method: "POST",
        headers: {
            "Accept-language": "EN",
            "Content-Type": "application/json"
        },
        body: jsonBody
    })
        .then(response => response.json())
        .then((data) => {
            console.log(data)
            if (data.status === 'NOT_ACTIVE') {
                location.replace("./verification")
            }
        })
}