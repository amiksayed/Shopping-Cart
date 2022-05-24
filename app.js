function updateQuantity(productName, isDecreasing, eachProductPrice) {
    const productInput = document.getElementById(productName + '-item');
    if (isDecreasing == true) {
        if (productInput.value > 0) {
            productInput.value = parseInt(productInput.value) - 1;
        }
    }
    else {
        productInput.value = parseInt(productInput.value) + 1;
    }
    const productPrice =  productInput.value * eachProductPrice;
    const displayProductPrice = document.getElementById(productName + '-price');
    displayProductPrice.innerText = productPrice;

    calculateTotal();
}
function getProductPrice(productName){
    return parseInt(document.getElementById(productName + '-price').innerText);
}

function calculateTotal() {
    const mobilePrice =  getProductPrice('mobile');
    const casePrice =  getProductPrice('case');
    const subTotal = mobilePrice + casePrice;
    const tax = subTotal * 0.1;
    const total = subTotal + tax;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax').innerText = tax.toFixed(2);
    document.getElementById('total').innerText = total;
}

function minusButton() {
    updateQuantity('mobile', true, 1219);
   
}
function plusButton() {
    updateQuantity('mobile', false, 1219);
    
}

function caseMinusButton() {
    updateQuantity('case', true, 59);
    
}
function casePlusButton() {
    updateQuantity('case', false, 59);
}

