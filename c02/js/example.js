// Create variables for the welcome message
var greeting = 'Howdy ';
var name = 'Molly';
var message = ', please check your order:';
//concatenate the three variables above to create the welcome message
var welcome = greeting + name + message;

// Create variables to hold details about the sign
var userSign = "string";
var tiles = userSign.length;
var shipping = 7;
var subTotal = tiles * 2;
var grandTotal = subTotal + 7;

var el = document.getElementById('greeting');
el.textContent = welcome;

var elUserSign = document.getElementById('userSign');
elUserSign.textContent = userSign;

var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;

var elShipping = document.getElementById('shipping');
elShipping.textContent = "$" + shipping;

var elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = "$" + subTotal;

var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = "$" + grandTotal;

