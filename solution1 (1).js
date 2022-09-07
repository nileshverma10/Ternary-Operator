//Problem 1 : Given a string count the number of words in that string
let count=0;
let str="hawkeye is a real hero";
for(i=0; i<=str.length-1; i++){
  if(str[i]==" ") {
    count++;
  }
    
  }

console.log(count+1);