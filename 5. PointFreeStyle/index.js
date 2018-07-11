const compose = require('ramda').compose;
const replace = require('ramda').replace;
const toLowerCase = require('ramda').toLower;

const snakeCase1 = word => word.toLowerCase().replace(/\s+/g, '_');
const snakeCase2 = compose(replace(/\s+/g, '_'), toLowerCase);


snakeCase1('Hello World!'); // => hello_world!
snakeCase2('Hello World!'); // => hello_world!
