//Problem 5: Given the days of the week in short format "Sun", "Mon" ... print in long format "Sunday", "Monday", ...

let day= "tue";
switch(day){
  case "sun": console.log("sunday");
    break;
  case "mon": console.log("monday");
    break;  
  case "tue": console.log("Tuesday");
    break; 
      case "wed": console.log("wednesday");
    break;
      case "fri": console.log("Friday");
    break;
      case "sat": console.log("saturday");
    break;
  default: console.log("please type correct input ");
}