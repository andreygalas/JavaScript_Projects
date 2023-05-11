// Define a dictionary
const myDictionary = {
    apple: "a fruit that grows on trees",
    basketball: "a game played with a ball and hoop",
    laptop: "a portable computer",
  };
  
  // Define a function that outputs a random key-value pair from the dictionary to an HTML element
  function displayRandomPair() {
    const dictionaryElement = document.getElementById("Dictionary");
  
    // Get a random key from the dictionary
    const keys = Object.keys(myDictionary);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
  
    // Delete the randomly selected key before displaying its value
    delete myDictionary[randomKey];
  
    // Output the key-value pair to the HTML element
    dictionaryElement.innerHTML = `${randomKey}: ${myDictionary[randomKey]}`;
  }
  
  // Define a function that displays the entire dictionary in an HTML element
  function displayDictionary() {
    const dictionaryElement = document.getElementById("Dictionary");
  
    // Output the entire dictionary
    dictionaryElement.innerHTML = JSON.stringify(myDictionary);
  
    // Call the displayRandomPair function to remove a random key-value pair from the dictionary and output it to the HTML element
    displayRandomPair();
  }
  