'use strict'

var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc'); // select all elements with id = 'calc'

// calculate subtotal of a product by multiplying quantity * price and set it to variable.
function updateSubtot($product) {
  // Iteration 1.1
  // get quantity out of input field hint: do not use .innerHTML but .value
  // get price out of span tag do use innerHTML
  // multiply and assign to a variable
  // select subtotal span and manipulate with value from variable
  var quantity = $product.getElementsByClassName("qty-input")[0].value;
  var unitPrice = $product.getElementsByClassName("price")[0].innerHTML;
  var $subTotal = $product.getElementsByClassName("subtotal")[0]; // eerste element [0] erbij is essentieel omdat je het element wil hebben en niet de array met 1 element.
  $subTotal.innerHTML = quantity * unitPrice; // displayen van subtotal behorende bij het element zodra functie wordt aangeroepen.
  return quantity * unitPrice; // return betreffende subtotal (wat gebeurt hiermee? Hoe maak ik gebruik van deze?)
}
function updateSubtot($product) { // algemene functie die 
  // Iteration 1.1
  var price = $product.getElementsByClassName("price")[0].innerHTML; //pakt eerste element van array classes price
  var quantity = $product.getElementsByClassName("quantity")[0].value; //pakt eerste element van array classes quantity
  var $subtotal = $product.getElementsByClassName("subtotal")[0]; //pakt eerste element van array classes subtotal
  $subtotal.innerHTML = quantity * price; // deze doet alleen de innerhtml aanpassen? of ook opslaan?
  return quantity * price
}
// loop over all products to calculate/update all the subtotals. 
function updateSubtotAll() {
  let $products = document.getElementsByClassName("product"); // hele tr (rij, want class 'product' is hele rij) met alle kinderen. = 1 element. in totaal 2 producten. dus twee elementen in deze array.
  for (let i = 0; i < $products.length; i++) {
    updateSubtot($products[i]) // element i ondergaat een transformatie (namelijk de functie updateSubtot). Elke subTotal wordt geupdate. 
  }
}

function updateAllSubtot() { // in deze functie wordt pas bepaald welke blokken er getarget en geselecteerd worden
  var $products = document.getElementsByClassName("product") // array met de product-blokken
  for (let i = 0; i < $products.length; i++) {
    updateSubtot($products[i]); // element i in array van blokken die door de updateSubtot wordt gehaald.
  }
}

function calcAll() {
  var total = 0;
  let $products = document.getElementsByClassName("product");
  for (let i = 0; i < $products.length; i++) {
    total = total + updateSubtot($products[i]) // what is  updateSubtot($products[i])???
  }
  var $total = document.getElementById("total");
  $total.innerHTML = total;
}



$calc.onclick = calcAll;


var deleteButtons = document.getElementsByClassName("btn-delete")


/* add event listener for every delete buttnn

document.getElementById("total").onclick = function(event) {
  debugger
}

function handleDelete(event) {
  // event.currentTarget
  // navigate from delete button to its product container using .closes
  // call removeChild on parent of product container 
} */