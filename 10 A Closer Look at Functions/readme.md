## _A Closer Look at Functions_

| First-Class function                                | Higher-Order Functions                                                                                     |
| --------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| JavaScript treats functions as first-class citizens | A function that **receives** another function as an argument, that **returns** a new function, or **both** |
| This mens that function are simply values           | This is only possible because of first-class functions                                                     |
| Functions are just another **"type"** of object     |

# _Closure_:

- A function has access to the variable environment(VE) of the execution context in which it was created.
- **Closure:**VE attached to the function, exactly as it was at the time and place the function was created.
- A closure is the closed-over **variable environment** of the execution context **in which a function was created,** even **after** that execution context is gone;
- A closure gives a function access to all the variables **of its parent function,** even after that parent function has returned. The function keeps a reference to its outer scope, which _preserves_ the scope chain throughout time.
- A closure makes sure that a function doesn't loose connection to **variables that existed at the function's birth place;**
- A closure is like a backpack that a function carries around wherever it goes. This backpack has all the **variables that were present in the environment where the function was created.**
