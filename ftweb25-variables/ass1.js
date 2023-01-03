//Problem 1: Print the numbers from the given starting point till ending point (including both start and end)
let character="d";
let lower=["a","b","c","d","e","f"];
let upper=["A","B","C","D","E","F"];
for(let i=0; i<lower.length; i++){
  if(character==lower[i]){
    character=upper[i];
  }
}console.log(character);