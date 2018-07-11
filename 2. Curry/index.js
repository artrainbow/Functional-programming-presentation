const add = x => y => x + y;
const multi = x => y => z => x * y * z;

add(1)(2); // => 3
multi(2)(3)(4); // => 24



const curry = require('ramda').curry; // Auto Curring
const _ = require('ramda').__;

const addFourNumbers = (a, b, c, d) => a + b + c + d;

const curriedAddFourNumbers = curry(addFourNumbers);
curriedAddFourNumbers(1, 2, 3, 4); // => 10
curriedAddFourNumbers(1, 2)(3, 4); // => 10
curriedAddFourNumbers(1)(2)(3)(4); // => 10
curriedAddFourNumbers(_, 1, 2, 3)(4); // => 10 _ - special placeholder value



//const split = require('ramda').split;

const split = separator => str => str.split(separator); //При определении подобного рода функций необходимо придерживаться правила: последним аргументом записывают переменную, содержащую данные, которыми мы собираемся оперировать.

split(' ')('hello world'); // => ['hello', 'world']