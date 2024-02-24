/**
 * Exercício 6:
Dado o array de números, calcule a soma de todos os elementos.
 */

const numbers = [10, 20, 30, 40, 50];

const arr = [];

numbers.forEach((item, index) => {

    arr.push(item + numbers[index])

});

console.log(arr);