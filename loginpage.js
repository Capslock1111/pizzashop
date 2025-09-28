"use strict";
let userData = [
    // {
    //     name: "",
    //     surname: "",
    //     age: "",
    //     gender: "",
    //     password: "",
    //     country: "",
    //     login: "",
    // },
];
let registerButton = document.querySelector('#registerButton');
let loginButton = document.querySelector('#loginButton');
let username = document.querySelector('#username');
let password = document.querySelector('#password');
registerButton.addEventListener('click', function () {
    let user = {

    };
    user.login = username.value;
    user.password = password.value;
    console.log(user);

    userData.push(user);
    console.log(userData);
    username.value = '';
    password.value = "";

});
loginButton.addEventListener('click', function () {
    console.log(userData);
    if (!!userData[0].login || !!userData[0].password) {
        if (userData[0].login === username.value && userData[0].password === password.value) {
            console.log("Готово");
        }
        else {
            console.log("Не готово");
        }
    }
    else if (userData.length === 0) {
        console.log("Ошибка");
    }


});