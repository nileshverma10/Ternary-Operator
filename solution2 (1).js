//Problem 2 : Given an array of string count the overall total number of characters
let count=0;
let arr=["nilesh","suresh","mahesh","brijesh","ayush"];
for(i=0; i<=arr.length-1; i++){
  count=count+arr[i].length;
}
console.log(count);