/* JavaScript (script.js) para el contador del carrito */

let cartCount = 0;
carro = document.getElementById("count");

function addToCart() {
    cartCount = cartCount + 1;
    carro.innerText = cartCount;
}
/*
const addToCartButtons = document.querySelectorAll(".add-to-cart-button");

addToCartButtons.forEach((button) => {
    button.addEventListener("click", addToCart);
});

addToCart.addEventListener("click", () => {
    cartCount++;
    cartCountElement.innerText = cartCount;
});*/