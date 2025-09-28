'use strict'
let back2 = document.getElementById('backToUserFormBtn');

let next2 = document.getElementById('confirmOrderBtn');

let userName = document.getElementById('userName1');

let userMail = document.getElementById('userMail');

let userNumber = document.getElementById('userNumber');

let userAdress = document.getElementById('userAdress');

let finalPrice2 = document.getElementById('finalPrice');

let finalPrice3 = document.getElementById('price2');



back2.addEventListener('click', function () {
    window.location.href = "./zakaz.html";
})
next2.addEventListener('click', function () {
    window.location.href = "./final.html";
})

let userData1 = JSON.parse(localStorage.getItem('someName1'));

let userData2 = JSON.parse(localStorage.getItem('someName3'));

console.log(userData1);

finalPrice2.innerText = +finalPrice2.innerText + +userData2 + +500;

userName.innerText = userName.innerText + userData1.name;

userMail.innerText = userMail.innerText + userData1.mail;

userNumber.innerText = userNumber.innerText + userData1.phone;

userAdress.innerText = userAdress.innerText + userData1.adress;

finalPrice3.innerText = +finalPrice3.innerText + +userData2;