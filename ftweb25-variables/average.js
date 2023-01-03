let arr=[2,7,11,33,28,96,104,08,43];
let sum=0;
let count=0;
for(let i=0; i<=arr.length; i++){
  if(arr[i]%2==0){
    count++;
    sum=(sum+arr[i]);  
    
  }
  
}
    console.log(sum/count);