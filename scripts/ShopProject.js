import { products, getProduct, loadProductsFetch } from "../data/products.js";
import { countCartQuantity, loadFromStorage, addToCart, cart } from "../data/cart.js";
import {} from "./utils/searchButton.js"
import { updateCartQuantity } from "./utils/headerCartQuantity.js";
 

loadMainPage();

async function loadMainPage() {
  await loadProductsFetch();
  
  renderProductsGrid(); 
}

function renderProductsGrid(){
  
  const addedMessageTimeouts = {};
  let productsHTMl = '';  
  const url = new URL(window.location.href);
  const search = url.searchParams.get('search');
  let filtredProducts = products;
  if (search) {
    document.querySelector(`.js-search-bar`).value = search;
    filtredProducts = products.filter((product) => {
      if (product.name.toLowerCase().includes(search.toLowerCase())) { 
        return product;
      }
      else
      if (product.keywords.toLowerCase().includes(search.toLowerCase())) {
            return product;
          
      }

    })
  }
  filtredProducts.forEach((product) => {
    productsHTMl+=`
      <div class="product-container">
        <div class="product-image-container">
          <img class="product-image" src="${product.getImgUrl()}">
        </div>
        <div class="product-name limit-text-to-2-lines">${product.name}</div>
        <div class="product-rating-container">
          <img class="product-rating-stars" src="${product.getStarsUrl()}">
          <div class="product-rating-count">${product.rating.count}</div>
        </div>
        <div class="product-price">${product.price}</div>
        <div class="product-quantity-container">
          <select class="js-select-${product.id}">
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option></select>
        </div>
        
        <div class="extra-info"> ${product.extraInfoHTML()}</div>
        <div class="product-spacer"></div>
        <div class="added-to-cart js-added-to-cart-${product.id}">
          <img src="./images/icons/added-checkmark.svg">
          Добавлено
        </div>

        <button class="js-add-button button-primary"  data-product-id="${product.id}">Добавить в корзину</button>
      </div>

    `;
  });

  document.querySelector('.products-grid').innerHTML=productsHTMl; 

  if(filtredProducts.length == 0) {
    productsHTMl=`
    <div class="search-not-found">
      <div>По вашему запросу ничего не найдено.</div>
      <a href="./ShopProject.html">Вернуться на главную</a>
    </div>`;
    document.querySelector('main').innerHTML=productsHTMl;
  }

  
   
  document.querySelectorAll('.js-add-button').forEach((button) =>{
    button.addEventListener('click', () =>{
      const productId = button.dataset.productId;
      const input = document.querySelector(`.js-select-${productId}`);
      const quantity = input.value;
      addToCart(productId, quantity);
      updateCartAdded(productId);
      updateCartQuantity();


    })
  });

  
function updateCartAdded(productId){
  const addedElement = document.querySelector(`.js-added-to-cart-${productId}`);
  addedElement.classList.add('added-to-cart-visible');
  const previousTimeoutId = addedMessageTimeouts[productId];  

  if (previousTimeoutId)
    clearTimeout(previousTimeoutId);

  const timeoutId = setTimeout(() => {
    addedElement.classList.remove('added-to-cart-visible');
    }, 1000);
    
    addedMessageTimeouts[productId] = timeoutId;
}



}

