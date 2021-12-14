'use strict';

const runOnce = function () {
  console.log('This will never run again');
};
runOnce;

// IIFE (immediately invoked function expressions)
(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();

console.log(isPrivate);

(() => console.log('This will ALSO never run again'))();

{
  const isPrivate = 23;
  let notPrivate = 30;
}
console.log(isPrivate);
console.log(notPrivate);
