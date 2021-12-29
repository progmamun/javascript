# What is Object-Oriented Programming? (OOP)

- Object-oriented programming(OOP) is a programming paradigm(style of code, "how" write and organize code) based on the concept of objects;
- We use objects to model(describe) real-world or abstract features;
- Objects may contain data(properties) and code(methods). By using objects, we pack **data and the corresponding behavior** into one block;
- In OOP, objects are self-contained pieces/blocks of code;
- Objects are building blocks of applications, and interact with one another;
- Interactions happen through a **public interface**(API): methods that the code **outside** of the object can access and use to communicate with the object;
- OOP was developed with the goal of organizing code, to make it **more flexible and easier to maintain** (avoid "spaghetti code").

# The 4 fundamental principles of Object-Oriented Programming

### "How do we actually design classes? How do we model real-world data into classes?"

1. Abstraction
2. Encapsulation
3. Inheritance
4. Polymorphism
   |Abstraction|Encapsulation|Inheritance|Polymorphism|
   |-----------|--------------|------------|-------------|
   |**Abstraction:**Ignoring or hiding details that don't matter allowing us to get an overview perspective of the thing we're implementing, instead of messing with details that don't really matter to our implementation.|**Encapsulation:**Keeping properties and methods private inside the class. so they are not accessible from outside the class. Some methods can be exposed as a public interface(API)|**Inheritance:**Making all properties and methods of certain class available to a child class, forming a hierarchical relationship between classes. This allows us to reuse common logic and to model real-world relationships.|**Polymorphism:**A child class can overwrite a method it inherited from a parent class(it's more complex that that, but enough for our purposes).|

# 3 Ways of implementing Prototypal inheritance in javascript

1. Constructor functions

- Technique to create objects from a function;
- This is how built-in objects like Arrays, Maps or Sets are actually implemented.

2. ES6 Classes

- Modern alternative to constructor function syntax;
- "Syntactic sugar": behind the scenes, ES6 classes work exactly like constructor functions;
- ES6 classes do NOT behave like classes in "classical OOP"(last lecture).

3. Object.create()

- The easiest and most straightforward way of linking an object to prototype object.
