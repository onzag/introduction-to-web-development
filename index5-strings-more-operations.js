const text = "this is some text";

console.log("STARTS WITH: ", text.startsWith("this"));
console.log("ENDS WITH: ", text.endsWith("text"));
console.log("INCLUDES: ", text.includes("some"));

// We can implement a very rudimentary search using the includes keyword
const text1 = "This is some very long text that contains stuff";
const text2 = "This is some very long text that contains not much but a dog";
const text3 = "This is some very long text that contains not much but a kitten";
const text4 = "This is some very long text that contains not much but a cat";

const wordToCheckAgainst = "cat";

console.log("TEXT 1 INCLUDES " + wordToCheckAgainst, text1.includes(wordToCheckAgainst));
console.log("TEXT 2 INCLUDES " + wordToCheckAgainst, text2.includes(wordToCheckAgainst));
console.log("TEXT 3 INCLUDES " + wordToCheckAgainst, text3.includes(wordToCheckAgainst));
console.log("TEXT 4 INCLUDES " + wordToCheckAgainst, text4.includes(wordToCheckAgainst));