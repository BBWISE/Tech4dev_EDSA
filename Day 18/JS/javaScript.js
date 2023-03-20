let array2 = [NaN, '100', {}, '11', '900', '201', undefined, null, 29, true, 98, false, undefined];


//let clean = only numbers.
let clean = array2.filter(function (value) {
    if (typeof (value) == 'number') {
        return value
    }
});
console.log(clean);
//lenght of clean
console.log(clean.length);
//type of each element of array2
let typeOfArrary2 = array2.map(function (value) {
    return typeof (value);
});
console.log(typeOfArrary2);
//sum of all even numbers of clean
let sum = clean.reduce(function (pvalue, cvalue, cindex, arr) {
    if (Number(cvalue) % 2 == 0) {
        return Number(cvalue) + pvalue;
    }
});
console.log(sum);
//sum of all odd numbers clean + 100
let oddNumbers = clean.reduce(function (value) {
    if (Number(value) % 2 != 0) {
        return value;
    }
});
console.log(oddNumbers + 100);
//do all elements in clean end in 1?
let endWith1 = clean.every(function (value) { //
    let newValue = Array.from(value);
    return newValue[newValue.length] == Number(9)
});

console.log(endWith1);
//do some elements in clean start with 9?
let startWith9 = clean.some(function (value) { //
   
    return Number(Array.from(value)[0]) == Number(9);
});

console.log(startWith9);
//what is the first and last position of undefined in array2
console.log(array2.indexOf(undefined), array2.lastIndexOf(undefined));
