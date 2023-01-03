let arr="abhishekchaudharyarijitrohitgopalkanaklalitrohanwakandaeminemchandnigovindkamalxraymehekmayankxolozebrawest";
let a={};
for(let i=0; i<arr.length; i++){
  if(a[arr[i]]==undefined){
    a[arr[i]]=1;
  }else{
    a[arr[i]]++;
  }
  
  
  
}console.log(a);