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

  // Assuming you have a 'products' array defined globally
  products[index].inCart += 1;
}

function removeItem(index) {
  let productNumbers = localStorage.getItem("cartNumbers");
  let cartItems = localStorage.getItem("productsInCart");
  productNumbers = parseInt(productNumbers) || 0;

  if (productNumbers > 0) {
      localStorage.setItem("cartNumbers", productNumbers - 1);
      document.querySelector('.cart span').textContent = productNumbers - 1;

      let updatedCartItems = JSON.parse(cartItems);
      if (updatedCartItems[index].inCart > 0) {
          updatedCartItems[index].inCart -= 1;
          localStorage.setItem("productsInCart", JSON.stringify(updatedCartItems));

          // Implement additional logic to update the display or perform other actions if needed
          // For example, you might want to remove the HTML element corresponding to the removed item
      }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  onLoadCartNumbers();

  // Assuming you have elements with class 'add-cart', 'remove-item', and 'btn-danger'
  let carts = document.querySelectorAll(".add-cart");
  let removeButtons = document.querySelectorAll(".remove-item");

  for (let i = 0; i < carts.length; i++) {
      carts[i].addEventListener('click', () => {
          cartNumbers(i);
      });

      removeButtons[i].addEventListener('click', () => {
          removeItem(i);
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
