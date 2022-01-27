// The conditional(Ternary) operator
const age = 22;
// age >= 24
//   ? console.log('I like to drink 7up🥛')
//   : console.log('I like to drink water🍺');

const drink = age >= 18 ? 'drink 7up🥛' : 'drink water🍺';
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = 'drink 7up🥛';
} else {
  drink2 = 'drink water🍺';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'drink 7up🥛' : 'drink water🍺'}`);
