console.log("Start of functionBasics.js file")

// STANDARD FUNCTION
function add7(number) {
    return number + 7;
}


// ARROW FUNCTIONS
// Function Delcaration
const multiply = (num1, num2) => num1 * num2;
//or
// Function Expression
const multiply2 = (num1, num2) => {return num1 * num2};


let result = add7(5); // result will be 12
let result2 = multiply(5,5); 
console.log(result);
console.log(`multiply result: ${result2}`);


// STRING MANIPULATION
function capitalize(str) {
    if (str.length === 0) {
        return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
console.log(capitalize("UPPERCASE"));
console.log(capitalize("uppercase"));
console.log(capitalize("uPPERCASE"));


// takes a string and returns the very last letter of that string:
function lastLetter(str) {
  length = str.length;
  return str.slice(length-1);
}
console.log(lastLetter("bananA"))
console.log(lastLetter("craB"))
console.log(lastLetter("specifiC"))


console.log("End of functionBasics.js file")
