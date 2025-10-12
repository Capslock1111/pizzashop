'use strict';

let registerButton = document.querySelector('#registerButton');
let name = document.querySelector('#username');
let surname = document.querySelector('#surname');
let country = document.querySelector('#country');
let age = document.querySelector('#age');
let gender = document.querySelector('#gender');
let login = document.querySelector('#login');
let password = document.querySelector('#password');

registerButton.addEventListener('click', function () {
    let user = {};

    user.name = username.value;
    user.surname = surname.value;
    user.country = country.value;
    user.age = age.value;
    user.gender = gender.value;
    user.login = login.value;
    user.password = password.value;
    console.log(user);

    window.location.href = 'loginpage.html';

    // В локальном хранилище нельзя хранить тип данных объект в обычном виде. Надо сконвертировать объект в
    // строку JSON (текстовый формат данных, в котором хранится инфа в БД/базе данных)
    // JSON.stringify(user) - как раз метод для конвертации в JSON объекта
    localStorage.setItem(localStorage.length, JSON.stringify(user));
});

