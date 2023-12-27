"use strict";
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
Object.defineProperty(exports, "__esModule", { value: true });
let bike1 = 'Honda';
let bike2 = 'Yamaha';
console.log('Is bike1 equal to bike2 ? ', bike1 == bike2);
console.log('Is bike1 not equal to bike2 ? ', bike1 != bike2);
// using lower case function:
console.log('Is bike1 equal to bike2 when both are in lower case? ', bike1.toLowerCase() == bike2.toLowerCase());
//Numerical test:
let x = 5;
let y = 3;
console.log('Is x equal to y? ', x == y);
console.log('Is x not equal to y? ', x != y);
console.log('Is x great than y? ', x > y);
console.log('Is x less than y? ', x < y);
console.log('Is x greater than or equal to y? ', x >= y);
console.log('Is x less than or equal to y? ', x <= y);
console.log('Is x less than y or x greater than y? ', x < y || x > y);
console.log('Is x less than y and also x greater than y? ', x < y && x > y);
console.log('Is x equal to 5 and y equal to 3? ', x == 5 && y == 3);
console.log('Is x equal to 5 and y equal to 4? ', x == 5 && y == 4);
// Finding item in an array:
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log('Is 2 includes in the array. I predict ture? ', arr.includes(2));
console.log('Is 10 includes in the array? ', arr.includes(10));
