import { getProduct } from "./products.js";
export let cart = [];


loadFromStorage();


  export function loadFromStorage(){
  
    cart = JSON.parse(localStorage.getItem('cart')) || [];
  }

  export function saveToStorage(){
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  export function addToCart(productId, quantity){
    let matchingItem;
    quantity = Number(quantity); 
      cart.forEach((item) => {
        if (item.productId === productId)
          matchingItem = item;
        });
        if (matchingItem){
          matchingItem.quantity+=quantity;
        } else {
          cart.push({
            productId: productId,
            quantity: quantity
          });
        }   
    saveToStorage();
  }



  export function substractFromCart(productId, quantity){
    let matchingItem;
    quantity = Number(quantity);
    cart.forEach((item) => {
      if (item.productId === productId)
        matchingItem = item;
      });
      if ((matchingItem)&&(matchingItem.quantity>quantity)){ 
          matchingItem.quantity-=quantity;
      } 
    saveToStorage();
  }


  export function changeCartItemQuantity(productId, quantity){
    let matchingItem;
    quantity = Number(quantity);
    if (quantity < 1) quantity = 1;
    if (quantity > 99) quantity = 99;
    cart.forEach((item) => {
      if (item.productId === productId)
        matchingItem = item;
      });
      if (matchingItem){
        matchingItem.quantity = quantity;
      }  
    saveToStorage();
  }



  export function countCartQuantity(){
    let quantity = 0;
    if (cart)
      cart.forEach((item) => {
        quantity+=item.quantity;
      })
      return quantity;
  }

  export function removeFromCart(productId){
    const newCart=[];
    cart.forEach((cartItem)=> {
      if (cartItem.productId!==productId) {
      newCart.push(cartItem); 
      }
    });
    cart = newCart;
    saveToStorage();
  }

  export function countFullCartPrice(){
    let fullPrice=0;
    if (cart) {
      cart.forEach((cartItem) => {
        const productId = cartItem.productId;
        const matchingItem = getProduct(productId);
        
        fullPrice+= (matchingItem.price * cartItem.quantity);
      });
    }
    else fullPrice = 0;

    return fullPrice;
  }