// type coercion
console.log('I am ' + 22 + ' years old');

console.log('23' - '10' - 3); // only (-, *, /, > ,<) convert string to number
// console.log('23' + '10' + 3); but + not work
console.log('23' / 2);
console.log('23' > '10');

let n = '1' + 1; // 11
n = n - 1;
console.log(n);
