// 3 ta number er moddhe lage and small number ber koro
// Small Number:
 const result = findSmall(5,444,11);
 function findSmall(a,b,c){

    if( typeof a !=='number' || typeof b !== 'number' || typeof c !== 'number'){
        return console.log('Please enter valid Number');
    }
    else{
         if(a>b && a>c){
             return  console.log('The Large Number is:', a);
         }else if(b>a && b>c){
            return  console.log('The Large Number is:', b);
         }else return console.log('The Large Number is:', c);
    }
 }




// Min Number:
//  function findMininum(a,b,c){

//     if( typeof a !=='number' || typeof b !== 'number' || typeof c !== 'number'){
//         return console.log('Please enter valid Number');
//     }
//     else{
//          if(a<b && a<c){
//              return  console.log('The Small Number is:', a);
//          }else if(b<a && b<c){
//             return  console.log('The Small Number is:', b);
//          }else return console.log('The Small Number is:', c);
//     }
//  }