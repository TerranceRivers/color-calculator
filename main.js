const prompt = require('prompt-sync')();

let direction = prompt("Would you like to combine colors or deconstruct a color? (Type 'c' or 'd')");

if (direction === "c") {
  let  colorOne = prompt("Enter first color:");
  let  colorTwo = prompt("Enter second color:");
  
  if ( colorOne === "red" &&  colorTwo === "blue") {
    console.log("The combined color is purple.");
  } else if ( colorOne === "blue" &&  colorTwo === "red") {
    console.log("The combined color is purple.");
  } else if ( colorOne === "yellow" &&  colorTwo === "blue") {
    console.log("The combined color is green.");
  } else if ( colorOne === "blue" &&  colorTwo === "yellow") {
    console.log("The combined color is green.");
  } else {
    console.log("The combined color is unknown.");
  }
} else if (direction === "d") {
  let color = prompt("Enter color:");
  
  if (color === "purple") {
    console.log("The color is made up of red and blue.");
  } else if (color === "green") {
    console.log("The color is made up of blue and yellow.");
  } else {
    console.log("The color cannot be deconstructed.");
  }
} else {
  console.log("Invalid Direction. Please enter 'combine' or 'deconstruct'.");
}