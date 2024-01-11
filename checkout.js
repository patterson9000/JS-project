// Get the cart table body element
var cartTableBody = document.getElementById("cartTableBody");

// Get the total amount element
var totalAmountElement = document.getElementById("totalAmount");

// Function to display cart items and calculate the total amount
function displayCartItems() {
  // Clear the cart table body
  cartTableBody.innerHTML = "";

  // Initialize the total amount
  var totalAmount = 0;

  // Iterate over each item in the cart
  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];

    // Create a new row for the item
    var row = document.createElement("tr");

    // Create a cell for the item name
    var nameCell = document.createElement("td");
    nameCell.textContent = item.name;
    row.appendChild(nameCell);

    // Create a cell for the item price
    var priceCell = document.createElement("td");
    priceCell.className = "text-right";
    priceCell.textContent = "$" + item.price.toFixed(2);
    row.appendChild(priceCell);

    // Add the row to the cart table body
    cartTableBody.appendChild(row);

    // Add the item price to the total amount
    totalAmount += item.price;
  }

  // Update the total amount element
  totalAmountElement.textContent = "$" + totalAmount.toFixed(2);
}


