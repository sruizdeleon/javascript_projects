/* Dado el siguiente array, usa .find() para econtrar el número 100. */

const numbers = [32, 21, 63, 95, 100, 67, 43];

const looking100 = numbers.find(number => number === 100);

console.log(looking100);