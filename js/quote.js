
function loadProductSelection() {
    document.querySelector('#name').innerHTML += localStorage.getItem('name');
    document.querySelector('#email').innerHTML += localStorage.getItem('email');
    document.querySelector('#item').innerHTML += localStorage.getItem('item');

    let quantity = localStorage.getItem('quantity');
    document.querySelector('#quantity').innerHTML += quantity;

    let price = 2.25;
    let calcPrice = quantity * price;
    document.querySelector('#calcprice').innerHTML += calcPrice;
}