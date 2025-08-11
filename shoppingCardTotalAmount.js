//shoppingCardTotalAmount 

const products = [
    { name : 'Shirt', price : 1400,quanity : 2 },
    { name : 'Pant', price : 2200, quanity : 2 },
    { name : 'T-Shirt', price : 900, quanity : 3 }, 
    { name : 'Watch', price : 3400, quanity : 1 },
    { name : 'Shoes', price : 2500, quanity : 1 } 

]

function totalCost (products){
    let sum = 0;
    for(const i of products){
        sum += i.price * i.quanity;
    }
    return sum;
}

const PayBill = totalCost(products);
console.log('Total Amount : ',PayBill,'tk');