"use strict"

const modalWrapper = document.querySelector('.modalboss');
const bodymodal = document.querySelector('body');


let items = [
  {
    id: 1,
    name: "Пицца Маргарита",
    price: 399,
    img: "img/1.webp"
  },
  {
    id: 2,
    name: "Пицца Пепперони",
    price: 499,
    img: "img/2.webp"
  },
  {
    id: 3,
    name: "Пицца Четыре сыра",
    price: 569,
    img: "img/3.webp"
  },
  {
    id: 4,
    name: "Вегетарианская пицца",
    price: 599,
    img: "img/4.webp"
  },
  {
    id: 5,
    name: "Пицца с морепродуктами",
    price: 399,
    img: "img/5.webp"
  },
  {
    id: 6,
    name: "Пицца BBQ",
    price: 375,
    img: "img/6.webp"
  }
];

let itemsList = document.getElementById("shop");

let cartCount = document.getElementById('cart-count');

let cart = document.getElementById('cart');

itemsList.innerHTML = "";

let back = document.getElementById('backToListBtn');

let count1 = document.getElementsByClassName('count');



function toggleHidden() {

  modalWrapper.classList.add('showElement');
  bodymodal.classList.add('modalbody');
}

setTimeout(function () {
  toggleHidden()
}, 5000)


function notoggleHidden() {
  bodymodal.classList.remove('modalbody');
  modalWrapper.classList.add('hideElement');
}
const closebutton = document.getElementById("modaltext2");
closebutton.addEventListener('click', function () {
  notoggleHidden();
})

for (let i = 0; i < items.length; i++) {
  console.log(items[i].price)
  let item =
    `<div class="sale" id="${items[i].id}">
  <img src=${items[i].img} alt>
    <div class="shop_1">
      <h3>${items[i].name}</h3>
      <p class="item">
        Пицца Маргарита — это классика итальянской кухни, которая покорила сердца гурманов по всему миру.
        Она состоит из тонкого теста, томатного соуса, свежей моцареллы и базилика. Легенда гласит, что это блюдо
        было создано в Неаполе в честь королевы Маргариты Савойской, и его цвета символизируют итальянский флаг: красный (томатный соус),
        белый (моцарелла) и зеленый (базилик). Простота и свежесть ингредиентов делают эту пиццу идеальным выбором для любителей традиционной
        итальянской кухни.</p>
      <div class="shop_2">
        <p class="price">${items[i].price}</p>
        <p>руб.</p>
        <button class="action-btn" id = "btn${items[i].id}" >В корзину</button>
        <div class="ItemsCounter item">
        <button class="action-btn-small minus">-</button>
        <p class="count">0</p>
        <button class="action-btn-small plus">+</button>
      </div>
      </div>
      
    </div>
</div>`;

  console.log(count1);

  itemsList.innerHTML += item;
}


let addItemBtns = document.getElementsByClassName('action-btn');

for (let button of addItemBtns) {
  button.addEventListener('click', function () {
    console.log(this.parentElement);
    cartCount.innerText = +cartCount.innerText + +this.parentElement.children[0].innerText;
    this.parentElement.children[3].classList.add("show-element");
    this.parentElement.children[3].children[1].innerText = +this.parentElement.children[3].children[1].innerText + 1;
  })
}

let plusBtns = document.getElementsByClassName('plus');
let minusBtns = document.getElementsByClassName('minus');

for (let button of plusBtns) {
  button.addEventListener('click', function () {
    console.log(this.parentElement);
    this.parentElement.children[1].innerText = +this.parentElement.children[1].innerText + 1;
    cartCount.innerText = +cartCount.innerText + +this.parentElement.parentElement.children[0].innerText;
  })
}

for (let button of minusBtns) {
  button.addEventListener('click', function () {
    if (+this.parentElement.children[1].innerText >= 1) {
      this.parentElement.children[1].innerText = +this.parentElement.children[1].innerText - 1;
      cartCount.innerText = +cartCount.innerText - +this.parentElement.parentElement.children[0].innerText;
    }
  })
}
cart.addEventListener('click', function () {
  window.location.href = "./zakaz.html";
  localStorage.setItem('someName3', JSON.stringify(cartCount.innerText));
})




