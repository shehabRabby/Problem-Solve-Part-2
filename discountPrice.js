/*
 0 - 100 = no discount 100 pay
 101 - 200 = 10% discount  90 pay
 201+ = 30% discount 70 pay
*/

function discountPrice (quanity){
    if(quanity <= 100){
       const total = quanity * 100;
    return total;
    }else if ( quanity <= 200){
        const total = quanity * 90;
    return total;
    }else{
        const total = quanity * 70;
    return total;
    }
}

const quanity = 201;
const amount = discountPrice(quanity);
console.log(amount);