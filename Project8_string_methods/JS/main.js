// Get original string
const originalString = document.getElementById("original").textContent;

// Concatenate string function
function concatString() {
  const newString = originalString.concat(", welcome to the world!");
  document.getElementById("concatenated").textContent = newString;
}

// Slice string function
function sliceString() {
  const slicedString = originalString.slice(0, 5);
  document.getElementById("sliced").textContent = slicedString;
}

// Convert to string function
function toStringString() {
  const newString = 42..toString();
  document.getElementById("tostring").textContent = newString;
}

// Convert to precision function
function toPrecisionString() {
  const newString = 3.14159.toPrecision(3);
  document.getElementById("toprecision").textContent = newString;
}
