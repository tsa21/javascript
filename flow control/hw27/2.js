var num=4;
var res=0,i=0;
var sum=0;

while( i<num){//0
   
    res+=num*Math.pow(10,i)//0+3*10^0=3,3+3*10=33,33+3*

   // res=(res*10)+num;
    i++;                      //i=1,2
    sum+=res;                 //0+3=3 3+33 
}
console.log(sum);
