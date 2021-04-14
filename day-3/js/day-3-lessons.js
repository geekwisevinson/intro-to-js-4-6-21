// String Methods

const myString = 'I am a string.';

const replaceStringWithWord = myString.replace('string', 'word'); // I am a word.
const indexOfI = myString.indexOf('i'); // 10
const lastIndexOfi = myString.lastIndexOf('i'); // 10
const arrayOfLetters = myString.split(''); // [....]
const includesWordString = myString.includes('string'); // true
const stringLength = myString.length; // 27
const stringPad = myString.padEnd(20, '-'); // I am a string.-------
const justASlice = myString.slice(5, 9); // "a st";
const removeWhiteSpace = myString.trim();
const upperCase = myString.toUpperCase(); // "I AM A STRING."
const lowerCase = myString.toLowerCase(); // "i am a string."

// Pop Up Methods
// const myAlertValue = alert('This is a pop up');
// const myConfirmValue = confirm('Are you sure?');
// const myPromptValue = prompt('What is your age?');


// const age = parseInt(myPromptValue);


// Math Properties
const random = Math.random() * 10;
const floored = Math.floor(random);

const ceiling = Math.ceil(random);


// Date Object

