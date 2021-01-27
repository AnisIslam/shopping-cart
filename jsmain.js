//................For Phone section...........
//For Plus Button
const plusButton = document.getElementById('phonePlusButton');
plusButton.addEventListener('click', function () {
    updateCartNumber('phoneNumber', 1);
    updatePrice('phonePrice', 1250);
    updateTotalPrice('subTotalPrice', 1250);
})
//For Minus Button
const minusButton = document.getElementById('phoneMinusButton');
minusButton.addEventListener('click', function () {
    updateCartNumber('phoneNumber', -1);
    updatePrice('phonePrice', -1250);
    updateTotalPrice('subTotalPrice', -1250);

    // if (updatedCurrentPhoneNumber <= 0) {
    //    minusButton.disabled = true;
    //    if (updatedCurrentPhoneNumber > 0) {
    //       minusButton.disabled = false;
    //    }
    // }
})
function updateCartNumber(id, counter) {
    document.getElementById(id).value = parseFloat(document.getElementById(id).value) + counter;
}
function updatePrice(id, price) {
    document.getElementById(id).innerText = parseFloat(document.getElementById(id).innerText) + price;
}
function updateTotalPrice(id, price) {
    document.getElementById(id).innerText = parseFloat(document.getElementById(id).innerText.replace(/,/g, '')) + price;
}
// .....................For Casing section...............................

//For Minus Button
const secondMinusButton = document.getElementById('secondMinusButton');
secondMinusButton.addEventListener('click', function () {
    updateCartNumber('casingNumber', -1);
    updatePrice('casingPrice', -59);
    updateTotalPrice('subTotalPrice', -59);
})
//For Plus Button
const secondPlusButton = document.getElementById('secondPlusButton');
secondPlusButton.addEventListener('click', function () {
    updateCartNumber('casingNumber', 1);
    updatePrice('casingPrice', 59);
    updateTotalPrice('subTotalPrice', 59);
})



