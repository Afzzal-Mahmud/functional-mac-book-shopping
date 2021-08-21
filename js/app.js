/* 
    project overview :
1 . giveInnerText function take html id of as parameter and
    return this id innerText as number;

2 . updateTotal function take price and calculate the total;

3 . addPrice function take html id and price based on 
    whic button you clicked and call updateTotal function and 
    calculate again;
*/

/* giveInnerText return the inner text of prise as number */
function giveInnerText(innerPrice) {
   const getField = document.getElementById(innerPrice)
   const getInnerNumber = parseInt(getField.innerText);
   return getInnerNumber;
}
/* take all price and calculate with updateTotal function */
    function updateTotal() {

       const defaultM1Price = giveInnerText('best-price-cost');
       const unifiedMemory= giveInnerText('ram-memory-cost');
       const ssdStorage= giveInnerText('storage-memory-cost');
       const deliveryCost= giveInnerText('delivery-cost');
       const totalCost = defaultM1Price + unifiedMemory + ssdStorage +deliveryCost;

       /* update total cost and discount total cost */
       const updateTotalCost = document.getElementById('total-cost');
       updateTotalCost.innerText = totalCost;

       const updateDiscountTotal = document.getElementById('promo-discount-total');
       updateDiscountTotal.innerText = totalCost;
    }
/* 
set all price with addPrice function it take id 
and the price basced on which btn you clicked
*/
function addPrice(id,price) {
    const getPriceId = document.getElementById(id);
    getPriceId.innerText = price;

    updateTotal();
}

/* button for unified memory */
const eightUnifiedBtn = document.getElementById('ram-memory-default');
eightUnifiedBtn.addEventListener('click',function(){
    
    addPrice('ram-memory-cost',0)
})

const sixteenUnifiedBtn = document.getElementById('ram-memory-price');
sixteenUnifiedBtn.addEventListener('click',function(){
    
    addPrice('ram-memory-cost',180)  
})

/* button for ssd storage */
const ssdBtn256 = document.getElementById('ssd-storage-default');
ssdBtn256.addEventListener('click',function () {
    
    addPrice('storage-memory-cost',0)
})

const ssdBtn512 = document.getElementById('ssd-storage-price1');
ssdBtn512.addEventListener('click',function () {
    
    addPrice('storage-memory-cost',100)
})

const ssdBtn1TB = document.getElementById('ssd-storage-price2');
ssdBtn1TB.addEventListener('click',function () {
    
    addPrice('storage-memory-cost',180)
})

/* button for delivery cost */
const deliveryFreeBtn = document.getElementById('delivery-cost-default');
deliveryFreeBtn.addEventListener('click',function () {

    addPrice('delivery-cost',0)
})

const deliveryCostBtn = document.getElementById('delivery-cost-needed');
deliveryCostBtn.addEventListener('click',function () {

    addPrice('delivery-cost',20)
})

/* discunt and promo code */

const promoBtn = document.getElementById('promo-btn');


promoBtn.addEventListener('click',function () {
    const promoInput = document.getElementById('promo-input');

    if(promoInput.value == 'stevekaku'){
        const discountId = giveInnerText('promo-discount-total');
        const discountPrice = (discountId*20)/100;
        const discountAmount = discountId-discountPrice;
        /* take inner text of discount Total on UI */
        const discountForPromo = document.getElementById('promo-discount-total')
        discountForPromo.innerText = discountAmount;

        promoInput.value = "";
    }
})
