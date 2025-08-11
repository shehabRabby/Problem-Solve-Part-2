//Furniture er dokan e geso ekhn tumi Chair,Table,Bed banaite chao so tmi chair,table,bed er quantity bolbe kon ta koyta lagbe se onujaye tara tmake bolbe koto gula wood labe

const chair = 0;
const table = 0;
const bed = 1;

function woodcalculator(chairQuantity,tableQuantity,bedQuantity){
    const perChairWood = 3; // 3 sfty
    const perTableWood = 10;
    const perBedWood = 50;

    const totalWoodForChair = chairQuantity * perChairWood;
    const totalWoodForTable = tableQuantity * perTableWood;
    const totalWoodForBed = bedQuantity * perBedWood;

    const totalWood = totalWoodForBed + totalWoodForChair + totalWoodForTable;
    return totalWood;
}
const totalwood = woodcalculator(chair,table,bed);
console.log('Total wood needed :', totalwood)