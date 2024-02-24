/**
 * Exercício 1: Dobrar os números de uma array
Dada a seguinte array de números: Use o método map para criar uma nova array que contenha cada número da array original dobrado.
 */


let numeros = [1, 2, 3, 4, 5];

const arr = numeros.map(item => {
    return item * 2;
});

console.log(arr);