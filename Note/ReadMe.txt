
Inheritance and the Prototype Chain:

Every JavaScript object has a prototype property, which makes inheritance possible in JavaScript.

The prototype property of an object is where we put methods and properties that we want other objects to inherit.

The Constructor's prototype property is not the prototype of the Constructor itself, 
but it's the prototype of all instances that are created through it.

When a certain method, or property, is called, the search starts in the object itself,
and if it cannot be found there, the search moves up on to the object's prototype.
This continues until the method is found.

And this is the prototype chain.