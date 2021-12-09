'use strict';

const mamun = {
  year: 1999,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
mamun.calcAge();
