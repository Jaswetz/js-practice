var subtotal = (13 + 1) * 5; // Subtotal is 70
var shipping = 0.5 * (13 + 1); // Shipping is 7

var total = subtotal + shipping; // Total is 77

// Print out subtotal
var elSub = document.getElementById('subtotal');
elSub.textContent = subtotal;

// Print out shipping price
var elShip = document.getElementById('shipping');
elShip.textContent = shipping;

// Print out total
var elTotal = document.getElementById('total');
elTotal.textContent = total;
