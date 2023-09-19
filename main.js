const $ = (selector) => document.querySelector(selector);

const menuEmail = $('.navbar-email');
const desktopMenu = $('.desktop-menu');
const burgerIcon = $('.menu');
const mobileMenu = $('.mobile-menu');
const cartIcon = $('.navbar-shopping-cart');
const aside = $('.product-detail');
const cardsContainer = $('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerIcon.addEventListener('click', toggleMobileMenu);
cartIcon.addEventListener('click', toggleCartAside)

function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains('inactive');
    if(!isAsideClosed){
        aside.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu(){
    const isAsideClosed=aside.classList.contains('inactive');

    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}
function toggleCartAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive')
    }
    aside.classList.toggle('inactive')
}
function renderProducts(arr) {
    for (product of arr){
        /* creacion */
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        /* asignación */
        const img = document.createElement('img');
        img.setAttribute('src', product.image);
    
        /* creacion */
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        /* creacion */
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$'+ product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        const productInfoFigure = document.createElement('figure');
        const productCartIcon = document.createElement('img');
    
        /* implemetación */
        productCard.append(img,productInfo);
        /* implemetación */
        productInfo.append(productInfoDiv,productInfoFigure);
        /* implementación */
        productInfoDiv.append(productPrice,productName);
        /* asignación */
        productCartIcon.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productCartIcon);
    
        cardsContainer.appendChild(productCard);
    } 
}

const productsList=[];

productsList.push({
    name:'bike',
    price:120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});
productsList.push({
    name:'iphone',
    price:820,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productsList.push({
    name:'pc',
    price:1000,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

renderProducts(productsList);
