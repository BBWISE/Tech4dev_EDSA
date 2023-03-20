// JavaScript source code

let statement = 'My name is Miracle Chibuzo, I am a software developer and a proud Nigerian';

console.log('First occurance of a is: ' + statement.indexOf('a'));
console.log('First name: ' + statement.substr(statement.indexOf("Miracle"), 7));
console.log('Last name: ' + statement.substr(statement.indexOf("Chibuzo"), 7));
console.log('The length of string is: ' + statement.length);