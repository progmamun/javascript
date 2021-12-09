'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `${firstName}, you are ${age} born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millennial = true;
      const str = `Oh, and you're a millennial, ${firstName}`;
      console.log(str);
    }
    console.log(millennial);
  }

  printAge();

  return age;
}

const firstName = 'Mamun';
calcAge(1999);
