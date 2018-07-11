//const compose = require('ramda').compose;

const compose = (foo1, foo2) => x => foo1(foo2(x));

const toUpperCase = str => str.toUpperCase();
const exclaim = str => str + '!';
const question = str => str + '?';



const mySentence = compose(toUpperCase, exclaim);  // Порядок выполнения функции compose происходит справа на лево.
mySentence('Hello World'); // => HELLO WORLD!



const mySentence2 = compose(exclaim, toUpperCase); // Порядок применения аргументов функции compose не важен. Это называется - Ассоциативностью.
mySentence2('Hello World'); // => HELLO WORLD!



const mySentence3 = compose(toUpperCase, compose(question, exclaim)); // Функцию сompose можно комбинировать с другими compose.
mySentence3('Hello World'); // => HELLO WORLD!?
