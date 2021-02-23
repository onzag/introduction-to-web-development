const doubleQuoteText = "this is some text";
const singleQuoteText = 'some more text';

// This represents the escape character, which is \
// when you use the escape character the next character that it follows
// is going to be part of the string itself, whatever it is
const sentenceSingleQuote = 'Don\'t do this'

// When you use double quote you don't need to escape the apostrophe '
const sentence = "Don't do this\"";

// this means a newline
const escapedCharacterNewLine = "\n"

// this means a tab
const escapedCharacterTab = "\t";

// in order to write the backlash we need to do it twice because
// the backlash is the escape character, so we are escaping the backlash itself
const backLash = "this is a backlash \\";

// this combines strings together, it's called a concatenation
const combined = doubleQuoteText + escapedCharacterNewLine + backLash;

const indexingExample = "world";
// we can pick a single character from the example
// for our previous example it is "l"
// because we start counting from 0
// 0 = w
// 1 = o
// 2 = r
// 3 = l
// 4 = d
const singleCharacter = indexingExample[3];
// we can also measure the size of the text
const sizeOfText = indexingExample.length;

const reversed = indexingExample[4] + indexingExample[3] + indexingExample[2] + indexingExample[1] + indexingExample[0];
let reversed2 = "";

// first part `let i = 0` we are declaring a variable that changes and starts in 0
// second part `i < sizeOfText` we are saying that the variable must be smaller than the size of text
// thrid part `i++` we are saying to add 1, every time the block executes
for (let i = 0; i < sizeOfText; i++) {
    // THE BLOCK
    const theCharacterWePicked = indexingExample[i];
    reversed2 = theCharacterWePicked + reversed2;
}

console.log(reversed2);