# TDZ ()

## this keyword/variable: Special variable that is created for every execution context(every function). Takes the value of(points to) the "owner" of the function in which the this keyword is used.

### this is NOT static. It depends on how the function is called, and its value is only assigned when the function is actually called.

- Method this = <Object that is calling the method>
- Simple function call this = undefined
- Arrow functions this = <this of surrounding function (lexical this)>
- Event listener this = <DOM element that the handle is attached to>

##### new, call, apply, bind

## this does NOT point to the function itself, and also NOT the its variable environment!
