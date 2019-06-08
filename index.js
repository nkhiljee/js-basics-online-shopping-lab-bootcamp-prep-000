var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
// write youonlr code here
  var itemPrice = Math.floor((Math.random() * 100) + 1);
  var item = {};
  item['itemPrice'] = itemPrice;
  item['itemName'] = itemName
  cart.push(item);
  console.log(`${itemName} has been added to your cart.`)
  return cart;
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  }
  else {
  var loop = [];
  for (let i = 0; i < cart.length; i++) {
    for (var item in cart[i]) {
      loop.push(`${itemName} at $${itemPrice}`)
    }
  }
  console.log(`In your cart, you have ${loop.join(", ")}.`)
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}



