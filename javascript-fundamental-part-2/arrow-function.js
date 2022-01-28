'use strict';

// arrow function
const calcAge3 = birthYear => 2022 - birthYear;
const age3 = calcAge3(1999);
console.log(age3);

/* const yearsUntilRetirement = birthYear => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return retirement;
};

console.log(yearsUntilRetirement(1991)); */

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement(1999, 'Mamun'));
console.log(yearsUntilRetirement(1980, 'Al Mamun'));
