// global variable
let globalVar = "I am a global variable";

function myFunction() {
  // local variable
  let localVar = "I am a local variable";
  
  // if statement
  if (globalVar.length > 0) {
    console.log("The global variable has a value");
  } else {
    console.log("The global variable is empty");
  }
  
  // intentional error to debug with console.log()
  let x = 10;
  console.log(y); // ReferenceError: y is not defined
  
  // Time_function() from previous slides
  function Time_function() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let meridiem = "AM";
    
    if (hour > 12) {
      hour -= 12;
      meridiem = "PM";
    }
    
    hour = (hour < 10 ? "0" : "") + hour;
    minute = (minute < 10 ? "0" : "") + minute;
    second = (second < 10 ? "0" : "") + second;
    
    let timeString = hour + ":" + minute + ":" + second + " " + meridiem;
    
    document.getElementById("output").textContent = "The current time is " + timeString;
  }
  
  Time_function(); // call the Time_function() within myFunction()
}
