'use strict'
const mailRegexp = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

const phoneRegexp = /^\+?[1-9][0-9]{7,14}$/i;

let mailHint = document.getElementById("requiredHint2");

let phoneHint = document.getElementById('requiredHint3');

let back = document.getElementById('backToListBtn');

let next = document.getElementById('confirmUserDataBtn');

let userData = {
    name: '',
    mail: '',
    phone: '',
    adress: ''
}

let nameInput = document.getElementById('nameInput');

let mailInput = document.getElementById('mailInput');

let numberInput = document.getElementById('numberInput');

let adressInput = document.getElementById('adressInput');


adressInput.addEventListener('input', function (event) {
    userData.adress = event.target.value;
    console.log(userData);
    if (adressInput.value === '') {

        document.getElementById('requiredHint4').style.display = "flex";
        adressInput.style.borderColor = "red";
        next.style.opacity = 0.5;
        next.disabled = true;
    }
    else {
        document.getElementById('requiredHint4').style.display = "none";
        adressInput.style.borderColor = "black";
        next.disabled = false;
        next.style.opacity = 1;
    }
})

numberInput.addEventListener('input', function (event) {
    userData.phone = event.target.value;
})


numberInput.addEventListener('blur', function (event) {
    userData.phone = event.target.value;
    console.log(userData)
    if (numberInput.value === '') {

        document.getElementById('requiredHint3').style.display = "flex";
        numberInput.style.borderColor = "red";
        next.style.opacity = 0.5;
        next.disabled = true;
    }
    else {
        document.getElementById('requiredHint3').style.display = "none";
        numberInput.style.borderColor = "black";
        next.disabled = false;
        next.style.opacity = 1;
    }

    if (numberInput.value.match(phoneRegexp)) {
        phoneHint.style.display = 'none';
    } else {
        phoneHint.style.display = 'flex';
    }
})

mailInput.addEventListener('blur', function (event) {
    userData.mail = event.target.value;
})
mailInput.addEventListener('blur', function (event) {
    userData.mail = event.target.value;
    console.log(userData)

    if (mailInput.value === '') {

        document.getElementById('requiredHint2').style.display = "flex";
        mailInput.style.borderColor = "red";
        next.style.opacity = 0.5;
        next.disabled = true;
    }
    else {
        document.getElementById('requiredHint2').style.display = "none";
        mailInput.style.borderColor = "black";
        next.disabled = false;
        next.style.opacity = 1;
    }

    if (mailInput.value.match(mailRegexp)) {
        mailHint.style.display = 'none';
    } else {
        mailHint.style.display = 'flex';
    }

})

nameInput.addEventListener('blur', function (event) {
    userData.name = event.target.value;
    console.log(userData);
    console.log("ура");

    if (nameInput.value === '') {

        document.getElementById('requiredHint1').style.display = "flex";
        nameInput.style.borderColor = "red";
        next.style.opacity = 0.5;
        next.disabled = true;
    }
    else {
        document.getElementById('requiredHint1').style.display = "none";
        nameInput.style.borderColor = "black";
        next.disabled = false;
        next.style.opacity = 1;
    }

});

back.addEventListener('click', function () {
    window.location.href = "./index.html";
})
next.addEventListener('click', function () {
    window.location.href = "./accept.html";
    localStorage.setItem('someName1', JSON.stringify(userData));
})
