// sob theke kom damer phone khuje ber koro

const phone = [
    {name: 'Sumsung', price : 20000, camera : '12mp', color : 'Gray'},
    {name: 'Xiomi', price : 27000, camera : '10mp', color : 'Black'},
    {name: 'iPhone 15 Pro', price : 120000, camera : '11mp', color : 'White'},
    {name: 'Honor', price : 30000, camera : '16mp', color : 'Yellow'},
    {name: 'Nokia', price : 15000, camera : '15mp', color : 'Black'},
    {name: 'Oneplus', price : 70000, camera : '9mp', color : 'Ashe'},
]

function getChepestPhone(phone){
    let min = phone[0];
    for(const i of phone){
        if(i.price < min.price){
            min = i
        }
    }
    return min;
}

const getPhone = getChepestPhone(phone);
console.log(getPhone);

