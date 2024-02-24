/**
 * Exercício 4:
Dado o array de números, crie um novo array com apenas os números pares.
 */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arr = [];

numbers.forEach(item => {
    if(item % 2 == 0) {
        arr.push(item);
    }
});

console.log(arr);