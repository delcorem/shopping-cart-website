function doAddToCart() {
    let name = document.querySelector('#name').value;
    localStorage.setItem('name', name);

    let email = document.querySelector('#email').value;
    localStorage.setItem('email', email);

    let quantity = document.querySelector('#quantity').value;
    localStorage.setItem('quantity', quantity);

    let item = document.querySelector('#item').value;
    localStorage.setItem('item', item);
    
    document.querySelector('#added').style.display = 'block';
    
}

function doPurchase() {
    if(localStorage.getItem('name') === ''){
        document.querySelector('#purchase').style.display = 'block';
    }
    else{
        window.location.href = "/pages/quote.html";
    }
    
}