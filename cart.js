function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");

  if (productNumbers) {
    document.querySelector('.cart span').textContent = productNumbers;
  }
}

function cartNumbers(index) {
  let productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers) || 0;

  localStorage.setItem("cartNumbers", productNumbers + 1);
  document.querySelector('.cart span').textContent = productNumbers + 1;

  products[index].inCart += 1;
}

document.addEventListener('DOMContentLoaded', () => {
  onLoadCartNumbers();

  let carts = document.querySelectorAll(".add-cart");

  for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
      cartNumbers(i);
    });
  }
});

let products = [
  {
    name: 'gi',
    tag: 'gi',
    price: 99,
    inCart: 0
  },
  {
    name: 'belt',
    tag: 'belt',
    price: 19,
    inCart: 0
  },
  {
    name: 'head_gear',
    tag: 'head_gear',
    price: 19,
    inCart: 0
  },
  {
    name: 'Rash Guard',
    tag: 'Rash Guard',
    price: 29,
    inCart: 0
  },
  {
    name: 'knee sleeve',
    tag: 'knee sleeve',
    price: 19,
    inCart: 0
  },
  {
    name: 'wrestling shoes',
    tag: 'wrestling shoes',
    price: 49,
    inCart: 0
  },
  {
    name: 'mouth guard',
    tag: 'mouth guard',
    price: 12,
    inCart: 0
  },
  {
    name: 'Defense BodyWash',
    tag: 'Defense BodyWash',
    price: 10,
    inCart: 0
  }
];
