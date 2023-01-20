"use strict"
document.addEventListener("DOMContentLoaded", () => {
    const token = localStorage.getItem('token')
    if (token == null) {
        if (window.location.pathname === "/registration/") {

        } else if (!(window.location.pathname === "/login/")) {
            window.location.replace("/login/");
        }

    } else {
        // content will shown
    }
})

function login(email, password) {
    let userObj = {email: email, password: password};
    let jsonBody = JSON.stringify(userObj);

    fetch("http://katkit.ap-south-1.elasticbeanstalk.com/auth/authorization", {
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

    fetch("http://katkit.ap-south-1.elasticbeanstalk.com/auth/registration", {
        method: "POST",
        headers: {
            "Accept-language": "EN",
            "Content-Type": "application/json"
        },
        body: jsonBody
    })
        .then(response => response.json())
        .then((data) => {
            login(email, password);
        })
}