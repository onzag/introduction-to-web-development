// WE can get arguments from the command line with strings
const arguments = process.argv;

// the first argument is always the node path
const nodePath = arguments[0];
console.log(nodePath);

// the second argument is always the program path where your program resides
const programPath = arguments[1];
console.log(programPath);

// and here we can get custom user defined arguments, starting from number 2
const firstArgument = arguments[2];
const secondArgument = arguments[3];

// if no argument is given it will show undefined
// try using "node index6-string-input.js hello world" in the terminal
console.log(firstArgument);
console.log(secondArgument);

// this will show hello and then world right at the end of the execution
// this is how you can give a program string inputs
// this is useful for the homework