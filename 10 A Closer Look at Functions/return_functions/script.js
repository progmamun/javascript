'use strict';

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Mamun');

// Challenge make arrow function this

const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('Al Mamun Khan');
