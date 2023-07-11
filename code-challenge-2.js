function FirstReverse(str) { 
  word = ""
  for (let i =0; i<str.length; i++){
    word = str [i] + word;
  }
  // code goes here  
  return word; 

}
   
// keep this function call here 
console.log(FirstReverse(readline()));