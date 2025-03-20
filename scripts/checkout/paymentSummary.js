import { countCartQuantity, countFullCartPrice } from "../../data/cart.js";
import { formatCurrency } from "../utils/moneyFormat.js";
import { cart, removeFromCart} from "../../data/cart.js";
import { renderCheckoutPage } from "../checkout.js";
import { updateCartQuantity } from "../utils/headerCartQuantity.js";

export function renderPaymentSummary(){
  const fullCartPrice = countFullCartPrice();
  const shippingPrice = (fullCartPrice*0.1);
  const totalPrice = fullCartPrice+shippingPrice;
  
  const innerHTML = `
   <div class="payment-summary-title">
          Оформить заказ
        </div>

        <div class="payment-summary-row">
          <div>Товары (${countCartQuantity()})</div>
          <div class="payment-summary-money">${formatCurrency(fullCartPrice)}</div>
        </div>

        <div class="payment-summary-row">
          <div>Стоимость доставки (10%):</div>
          <div class="payment-summary-money">${formatCurrency(shippingPrice)}</div>
        </div>


        <div class="payment-summary-row total-row">
          <div>Итого:</div>
          <div class="payment-summary-money">${formatCurrency(totalPrice)}</div>
        </div>

        <button class="place-order-button js-place-order-button button-primary">
          Заказать
        </button>
  ` 

  document.querySelector('.js-payment-summary').innerHTML = innerHTML;

  updateCartQuantity();

  document.querySelector(".js-place-order-button").addEventListener('click', async() => {  
     
      const response = await fetch('./backend/orderResponse.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        },
      body: JSON.stringify({
      cart: cart
      })
    });
    if (response.ok)
      {
        alert("Заказ оформлен");
      }

    cart.forEach((item) => {
      removeFromCart(item.productId)
    });
    
    renderCheckoutPage();
  })
 


  if(cart.length === 0)
  {
    const placeOrderButton =  document.querySelector('.js-place-order-button');
    placeOrderButton.classList.add('inactive-button');
    placeOrderButton.style.pointerEvents = 'none';

  }
}
