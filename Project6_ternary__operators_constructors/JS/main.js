// A function that utilizes a ternary operation with input from the browser
function checkEven() {
    const number = parseInt(document.getElementById("number-input").value);
    const isEven = number % 2 === 0 ? "even" : "odd";
    document.getElementById("result").textContent = `The number is ${isEven}.`;
  }
  
  // A constructor function that uses the "new" and "this" keywords
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // A function to display the results of the constructor function within an HTML element
  function displayPerson() {
    const person = new Person("John Doe", 30);
    document.getElementById("person").textContent = `Name: ${person.name}, Age: ${person.age}`;
  }
  
  // A nested function that's called by the displayPerson function
  function displayAddress() {
    const address = "123 Main Street";
    document.getElementById("address").textContent = `Address: ${address}`;
  }
  
  // Call displayPerson function to display the person's name and age
  displayPerson();
  
  // Call the nested function to display the address
  displayAddress();
  