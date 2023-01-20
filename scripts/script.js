"use strict"
document.addEventListener("DOMContentLoaded", () => {
    const token = localStorage.getItem('token')
    if (token == null) {
        if (window.location.pathname === "/katkit/registration/") {

        } else if (!(window.location.pathname === "/katkit/login/")) {
            window.location.replace("/katkit/login/");
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
        .then(data => {
            if (data.status === 200) {
                localStorage.setItem('token', data.token);
                window.location.replace("./katkit/");
            }
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
        .then(data => {
            if (data.status === 200) {
                login(email, password);
                localStorage.setItem('token', data.token);
                window.location.replace("./katkit/");
            }
        })
}