
/*console.log(array1.concat(array2))
console.log(array1.join(";"))*/

let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, [4, 5, 7, 8], [undefined, 'hi', '6', null]];

let last = array1[array1.length-1]
console.log(last)
console.log(typeof (last));

let second = array1[array1.length-2];
console.log(second);

let multiply = second.length * last[2]
console.log(multiply)

let length = array1.length
console.log(length)

delete array1[array1.indexOf(4)]
delete array1[array1.indexOf(5)];
delete array1[array1.indexOf(9)];
delete array1[array1.indexOf(last)];
delete array1[array1.indexOf(second)];

let array2 = array1;
console.log(array2)

let newLength = array2.length
console.log(newLength)

let ar = [2, 5, 1, 6, 6, 9, 12, 0];
let arSort = ar.sort();
console.log(arSort.reverse());

console.log(ar.sort(function (a, b) {
    b - a;
}))

