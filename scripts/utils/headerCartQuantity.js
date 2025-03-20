import { countCartQuantity } from "../../data/cart.js";

updateCartQuantity();

export function updateCartQuantity(){
  document.querySelector('.cart-quantity').innerText = countCartQuantity();
}