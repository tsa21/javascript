var num1=10,num2=20,num3=15;
// if(num1>num2 && num1>num3)
//     {
//         if(num2>num3){
//             console.log("second largest no is ",num2); 
//         }
//         else{
//             console.log("second largest no is ",num3);
//         }

// }
// else if(num2>num1 && num2>num3)
// {
//     if(num1>num3){
//         console.log("second largest no is ",num1);
//     }
//     else{console.log("second largest no is ",num3);}
// }
// else if(num1>num2)
// {       
//     console.log("second largest no is ",num1);

// }
// else{
//     console.log("second largest no is ",num2);
// }

console.log(num1>num2&&num1>num3 ? num2>num3 ? num2:num3 : num2>num1&&num2>num3 ? num1>num3?num1:num3 :num1>num2?num1:num2);
