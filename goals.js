let prompt = require('prompt-sync')();

let colors = prompt("Enter two colors separated by a space (for combination) or a single color (for deconstruction):");

if (colors.includes(" ")) {
  let color1 = colors.split(" ")[0];
  let color2 = colors.split(" ")[1];
  
  if (color1.includes === "red" && color2 === "blue") {
    console.log("The combined color is purple.");
  } else if (color1.includes === "blue" && color2 === "red") {
    console.log("The combined color is purple.");
  } else if (color1.includes === "yellow" && color2 === "blue") {
    console.log("The combined color is green.");
  } else if (color1.includes === "blue" && color2 === "yellow") {
    console.log("The combined color is green.");
  } else {
    console.log("The combined color is unknown.");
  }
} else {
  if (colors === "purple") {
    console.log("The color is made up of red and blue.");
  } else if (colors === "green") {
    console.log("The color is made up of blue and yellow.");
  } else {
    console.log("The color cannot be deconstructed.");
  }
}