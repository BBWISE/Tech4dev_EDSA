
let classString = "Her daily goal was to improve on yesterday"
//string2 - last word
let array3 = classString.split(" ");
let string2 = array3[array3.length - 1];
//console.log(string2[string2.length - 1]);
console.log(string2);
//array3 = break classString into array
console.log(array3);
//spArray = insert last word in array3 after index 2
array3.splice(2, 0, string2);
let spArray = array3;
console.log(spArray);



//orderedArray = spArray ordered by asc order
/*spArray.sort(function (a, b) {
    return a - b;
});*/
let orderedArray = spArray.sort();
//let orderedArray = spArray.sort(function (a, b) { return a - b });
console.log(orderedArray);                                                  // -----------------



//run a for each on spArray and print the index when value is 'to'
console.log(spArray.indexOf('to'));
//redArray = number of words in the orderedArrar
let redArray = orderedArray.length;
console.log(redArray);
