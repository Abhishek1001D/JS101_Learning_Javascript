//Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

let saved_username="Abhishek";
let saved_password="Dwivedi";
let username="Abhishek";
let password="Dwivedi";
if(username==saved_username && password==saved_password){
  console.log("login successful");
}
else{
  console.log("login credentials don't match");
}