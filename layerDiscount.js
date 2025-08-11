// layerDiscount
/**
 * first 100 -> 100
 * 101 to 200 -> 90
 * Above 200 -> 70
 */


function layerDiscount (quanity){
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;

    if(quanity <= 100){
        const total = quanity * first100Price;
        return total;
    } else if(quanity <= 200){
        const first100Total = 100 * first100Price; //ekhane 200 r ghore asche mane sure j 100 ta ase so  ei 100 holo prothom 100 ta
        const remainingQuantity = quanity - 100; // prothom 100 bad dile baki j gula thake seta ekhane  ber korlam
        const remaningTotal = remainingQuantity * second100Price; // oi baki tukur discount ber korlam ekhane
        const total = first100Total + remaningTotal; // total ber korlam first 100 + baki j gula thakbe tar 
        return total;
    }else{
        const first100Total = 100 * first100Price; //ekhane 300 r ghore asche mane sure j 100 ta ase so  ei 100 holo prothom 100 ta
        const second200Total = 100 * second100Price;  //ekhane 300 r ghore asche mane sure j 200 ta ase so  ei 100 holo second 100 ta
        const remainingQuantity = quanity - 200;
        const remaningTotal = remainingQuantity * above200Price;
        const total = first100Total + second200Total + remaningTotal;
        return total;
    }

}

const quanity = 302;
const amount = layerDiscount(quanity);
console.log('Total Amount: ',amount);
