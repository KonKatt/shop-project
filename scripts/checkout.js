
import { loadProductsFetch } from "../data/products.js";
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import {} from "./utils/searchButton.js" 

loadPage();

async function loadPage() {
 await loadProductsFetch();
  renderCheckoutPage();
}


export function renderCheckoutPage(){
renderOrderSummary();
renderPaymentSummary();

}