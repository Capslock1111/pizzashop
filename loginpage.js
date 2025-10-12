"use strict";



let registerButton = document.querySelector('#registerButton');
let loginButton = document.querySelector('#loginButton');
let clearButton = document.querySelector('#clearButton');
let username = document.querySelector('#username');
let password = document.querySelector('#password');
let massage1 = document.querySelector("h1");
let massage2 = document.querySelector("h2");

registerButton.addEventListener('click', function () {
    window.location.href = "regPage.html";
});

loginButton.addEventListener('click', function () {
    // Создаем пустой массив, куда положим данные пользователей из localStorage
    let userData = [];

    const localStorageSize = localStorage.length;

    for (let i = 0; i < localStorageSize; i++) {
        // JSON.parse метод дешифрует данные объекта из localStorage, чтобы корректно их отобразить нам
        // Метод push массивов добавляет данные из localStorage в userData массив
        userData.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
    console.log(userData);

    // Метод find возвращает undefined (т.е. false = ложь), если логин, введенный в поле не совпадает с 
    // логинами в БД (базе данных) userData.
    // Если же пользователь с таким логином существует, то этот метод возвращает нашего найденного пользователя
    // (объект)
    const foundData = userData.find(data => username.value === data.login);

    // Если пользователь с таким логином есть (foundData == true - это то же самое, что foundData), то
    // срабатывает следующая проверка уже пароля на верность/корректность
    if (foundData) {
        console.log(foundData);
        massage1.classList = "messagenone";
        if (password.value === foundData.password) {
            console.log("Добро пожаловать!");
            window.location.href = "index.html";
            massage2.classList = "messagenone";
            massage2.classList = "messagenone";
        } else {
            console.log("Неправильный пароль");
            massage2.classList = "messageshow";
        }
    } else {
        console.log("Неправильный логин");
        massage1.classList = "messageshow";
    }
});

// Удобная кнопка для очистки БД (локального хранилища)
clearButton.addEventListener('click', function () {
    localStorage.clear();
});

