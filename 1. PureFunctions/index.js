const arr = [1,2,3,4,5];

arr.slice(0, 3); //=> Pure
arr.splice(0, 3); //=> Impure



let greeting;

const greetImpure = greet => {
    greeting = 'Hello ' + greet;
};

greetImpure('Denys'); //=> Impure



const greetPure = greet => 'Hello ' + greet;

greetPure('Denys'); //=> Pure
