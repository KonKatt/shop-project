import {getProduct} from "../../data/products.js";
import {addToCart, substractFromCart, cart, changeCartItemQuantity, removeFromCart} from "../../data/cart.js";
import { renderCheckoutPage } from "../checkout.js";

export function renderOrderSummary(){
  let orderHTML = '';
  if (cart.length){
    cart.forEach((cartItem) => {
      const matchingItem = getProduct(cartItem.productId);
      orderHTML+=`
          <div class="item-container">
          <div class="product-image">
            <img src="${matchingItem.getImgUrl()}">
          </div>

          <div class="product-info">
            <div class="product-name">${matchingItem.name}</div>
            <div class="product-price-container">
              <div class="product-price">${matchingItem.price} </div>
            </div>
          </div>

          <div class="product-quantity-container">
            <button class="change-quantity js-change-quantity-button" 
                    data-product-id="${matchingItem.id}" data-action="substract">-</button>
            <input input type="number" class="product-quantity js-input-quantity js-input-quantity-${matchingItem.id}" 
                          min="1"  max="99"  data-product-id="${matchingItem.id}" value="${cartItem.quantity}">
            <button class="change-quantity js-change-quantity-button" 
                         data-product-id="${matchingItem.id}" data-action="add">+</button>
          </div>
          
          
          <div class="delete-container">
          <div class="product-counted-price">${countOneItemPrice()}</div>         
            <button class="delete-button js-delete-button" data-product-id="${matchingItem.id}">
              <img src="images/icons/delete.svg"></button>
          </div>

        </div>
      `
      function countOneItemPrice(){
        return (cartItem.quantity*matchingItem.price);
      }
    });

    document.querySelector(".js-order-summary").innerHTML = orderHTML;

    document.querySelectorAll(".js-change-quantity-button").forEach((button) => {
      button.addEventListener('click', () => {
        const productId = button.dataset.productId;
        const input = document.querySelector(`.js-input-quantity-${productId}`);
        const inputQuantity = Number(input.value);
        if ((button.dataset.action === "substract")&&(inputQuantity>1)){
          substractFromCart(productId, 1);
          input.value--;
        }
          else if ((button.dataset.action === "add")&&(inputQuantity<99)) {
            addToCart(productId, 1);
            input.value++;
          }
        
          renderCheckoutPage();
      });
    });

    document.querySelectorAll(".js-input-quantity").forEach((input) => {
      input.addEventListener('change', () => {
        const productId = input.dataset.productId;
        const inputQuantity = Number(input.value);
        changeCartItemQuantity(productId, inputQuantity);
        renderCheckoutPage();
      });
    });

    document.querySelectorAll(".js-delete-button").forEach((button) => {
      button.addEventListener('click', () => {  
        const productId = button.dataset.productId;
        removeFromCart(productId);
        renderCheckoutPage();
      });
    });

 
   
  }

  else {
    orderHTML=`
    <div class="cart-is-empty-container">
      <img src="images/icons/empty-box.svg">
      <div class="cart-is-empty-text">В корзине пока пусто. </div>
      <a href="./ShopProject.html"><button class="button-primary">Перейти на главную</button></a>
    </div>
    `
    
    document.querySelector(".js-order-summary").innerHTML = orderHTML;
  }
  


  
  
  }

