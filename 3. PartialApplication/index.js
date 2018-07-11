//const partial = require('ramda').partial;

const partial = (foo, ...args) => (...moreArgs) => foo(...args, ...moreArgs);



const multi = (a, b, c) => a * b * c;

const double = partial(multi, [2]);
const triple = partial(double, [3]);
const quadruple = partial(double, [4]);

triple(3); //=> 18
quadruple(4); //=> 32



const greet = (salutation, title, firstName, lastName) => salutation + title + ' ' + firstName + ' ' + lastName + '!';

const sayHello = partial(greet, ['Hello']);
const sayHelloToMs = partial(sayHello, ['Ms.']);
const sayHelloToMrs = partial(sayHello, ['Mrs.']);

sayHelloToMs('Jane', 'Johnson'); //=> 'Hello, Ms. Jane Johnson!'
sayHelloToMrs('Jack', 'Johnson'); //=> 'Hello, Mrs. Jack Johnson!'
