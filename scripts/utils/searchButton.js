document.querySelector('.js-search-button').addEventListener('click', () => {
  startSearch();
})


document.querySelector('.js-search-bar').addEventListener('keydown', (event) =>{
  if (event.key === 'Enter') {
    startSearch();
  }
});


function startSearch(){
  const search = document.querySelector('.js-search-bar').value;
  
  window.location.href = (search) ? `ShopProject.html?search=${search}` : `ShopProject.html`;
}