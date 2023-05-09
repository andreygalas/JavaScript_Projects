// Define two variables with string values
var Sent1 = "This is the beginning of the string";
var Sent2 = " and this is the end of the string";

// Concatenate the two variables together//
var message = Sent1 + Sent2;

// Create a new h1 element with the message as its text content
var heading = document.createElement("h1");
heading.textContent = message;

// Add the heading to the body of the page
document.body.appendChild(heading);

// Display an alert with the message
window.alert(message);

// Calculate an expression
var x = 10;
var y = 5;
var z = x * y;

// Create a new p element with the result of the expression as its text content
var paragraph = document.createElement("p");
paragraph.textContent = "The value of z is: " + z;

// Add the paragraph to the body of the page
document.body.appendChild(paragraph);
