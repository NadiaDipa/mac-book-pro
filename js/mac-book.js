//memory section variable
const memoryCost8gb = 0;
const memoryCost16gb = 180;

//storage section variable
const storageCost256gb = 0;
const storageCost512gb = 100;
const storageCost1tb = 180;

// delivery section variable
const deliveryAug25 = 0;
const deliveryAug20 = 20;

// promo section variable
const promoCouponCode = "stevekaku";


// this is the main function
function priceForEveryButton(buttonId, price) {
    const buttonField = document.getElementById(buttonId);
    // console.log(buttonField.innerText);
    buttonField.innerText = price;
    //priceForEveryButton();
    totalCostWithWithoutPromo();

}
//memory section EventHandling
document.getElementById('memorybtn1').addEventListener('click', function () {
    //  console.log("memorybtn1");
    priceForEveryButton('memory', memoryCost8gb);
});
document.getElementById('memorybtn2').addEventListener('click', function () {
    // console.log("memorybtn2");
    priceForEveryButton('memory', memoryCost16gb);
});


//storage section EventHandling
document.getElementById('storage1').addEventListener('click', function () {
    priceForEveryButton('storage', storageCost256gb);
});
document.getElementById('storage2').addEventListener('click', function () {
    priceForEveryButton('storage', storageCost512gb);
});
document.getElementById('storage3').addEventListener('click', function () {
    priceForEveryButton('storage', storageCost1tb);
});



//delivery section EventHandling
document.getElementById('delivery-option1').addEventListener('click', function () {
    priceForEveryButton('delivery', deliveryAug25);
});

document.getElementById('delivery-option2').addEventListener('click', function () {
    priceForEveryButton('delivery', deliveryAug20);
});


//promo
function disablePromoCodeButton() {
    document.getElementById('promo-button').disabled = true;
}

function settotalCostWithPromo(promoCode) {
    if (promoCode == promoCouponCode) {
        const totalCostWithoutPromo = addtotalcostWithoutPromo();
        

        const totalCostWithPromo = totalCostWithoutPromo - (totalCostWithoutPromo * 0.2);
        console.log(totalCostWithPromo);

        document.getElementById('total-promo').innerText = totalCostWithPromo;
        disablePromoCodeButton();
    }
}

//without-promo
function addtotalcostWithoutPromo() {
    const bestPrice = parseInt(document.getElementById('best-price').innerText);
    const memoryCost = parseInt(document.getElementById('memory').innerText);
    const storageCost = parseInt(document.getElementById('storage').innerText);
    const deliveryCost = parseInt(document.getElementById('delivery').innerText);

    return bestPrice + memoryCost + storageCost + deliveryCost;
}

function totalCostWithWithoutPromo() {
    const totalcostWithoutPromo = addtotalcostWithoutPromo();
    console.log(totalcostWithoutPromo);
    document.getElementById('total').innerText = totalcostWithoutPromo;
    document.getElementById('total-promo').innerText = totalcostWithoutPromo;
}
// promo button EventHandling
document.getElementById('promo-button').addEventListener('click', function () {
    let promoCode = document.getElementById('promo-input');
    settotalCostWithPromo(promoCode.value);
    promoCode.value = '';
});
