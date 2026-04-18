"use strict"

let ItemBasket = [];

let addItem = document.getElementsByClassName("basket");

let FinalPrice = 0;

let itemsPrises = document.getElementsByClassName("price");

let additeminbasket = document.getElementsByClassName("test");

let ItemsCounter = document.getElementsByClassName("item");

let ItemPlus1 = document.getElementsByClassName("ItemPlus");

let ItemMinus1 = document.getElementsByClassName("ItemMinus");

let count = document.getElementsByClassName("count")

let itemsList = document.getElementById("shop");

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

itemsList.innerHTML = "";

for (let i = 0; i < items.length; i++) {
  console.log(items[i].price)
  let item =
    `<div class="sale animate__animated animate__zoomIn" id="${items[i].id}">
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
        <button class="basket test" id = "btn${items[i].id}" >В корзину</button>
      </div>
      <div class="ItemsCounter item">
        <button class="ItemMinus">-</button>
        <p class="count">1</p>
        <button class="ItemPlus">+</button>
      </div>
    </div>
</div>`;

  itemsList.innerHTML += item;

  document.getElementById(`btn${items[i].id}`).addEventListener('click', function () {
    console.log(document.getElementById(`btn${items[i].id}`));
  })
}

// Создаем функцию, которая переключает видимость элемента.
// Почему функция? Потому что ее потребуется использовать много раз (вызывать много раз для переключения видимости)
// function toggleHidden() {
//   const modalWrapper = document.querySelector('.modal-wrapper');
//   modalWrapper.classList.add('showElement');
// }

// // Вызываем функцию для отображения модального окна после загрузки страницы
// toggleHidden();

