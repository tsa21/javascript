// var num=3;
// var i=1;
// var res=0;

// while(i !=0 && i<10)
// {
    
//     res=Math.pow(i,num);
//     if(res>8 && res<30)
//     {
//         console.log(i);
        
//     }
//     i++;
// }

var low=8,upp=30;
var num=2;
var i=1

while(i<upp){
    let res=i**num
    if(res>low && res<=upp){
        console.log(i);
    }
    i++;
}