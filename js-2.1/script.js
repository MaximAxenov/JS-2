'use strict';

const products = [
    { id: 1, title: 'Шорты', price: 1999 },
    { id: 2, title: 'Кроссовки', price: 8999 },
    { id: 3, title: 'Футболка', price: 1511 },
    { id: 4, title: 'Кепка', price: 1200 },
    { id: 5, title: 'Куртка', price: 15000 },
    { id: 6, title: 'Часы', price: 13000 },
    { id: 7, title: 'Кроссовки', price: 14599 },
    { id: 8, title: 'Худи', price: 3689 },
    { id: 9, title: 'Свитшот', price: 2899 },
    { id: 10, title: 'Цепь', price: 5459 },
];

const renderProduct = (item, img ='https://placehold.co/200x150') =>
            `<div class="product-item">
                <img src="${img}" alt="image" class="product-img">
                <h3 class="product-title">${item.title}</h3>
                <p class="product-price">${item.price} руб</p>
                <button class="by-btn">В корзину</button>
            </div>`;

const renderProducts = list => {
    document.querySelector('.mainContainer').insertAdjacentHTML('beforeend', list.map(item => renderProduct(item, item.img)).join(''));
};

renderProducts(products);