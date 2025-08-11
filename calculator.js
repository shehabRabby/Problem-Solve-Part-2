//Calculator Generator


function add(n1,n2){
    const sum = n1 + n2;
    return sum;
}
function substruct(n1,n2){
    const sub = n1 - n2;
    return sub;
}
function multiply(n1,n2){
    const mul = n1 * n2;
    return mul;
}
function devide(n1,n2){
    const div = n1 / n2;
    return div;
}
function remain(n1,n2){
    const div = n1 % n2;
    return div;
}


function calculator(n1,n2,operation){
    if(operation === '+'){
        const result = add(n1,n2);
        return result;
    }else if(operation === '-'){
        const result = substruct(n1,n2);
        return result;
    }else if(operation === '*'){
        const result = multiply(n1,n2);
        return result;
    }else if(operation === '/'){
        return devide(n1,n2);
    }  
    else if(operation === '%'){
        return remain(n1,n2);
         
    }else{
        return console.log('Invalid Only +,-,*,/,% is allowed');
    }
}

const cal = calculator(7,5,'+');
console.log(cal);