/**
 * Exercício 7:
Dado o array de palavras, crie um novo array com todas as palavras em letras maiúsculas.
 */

const words = ["javascript", "programming", "code", "computer"];

const arr = [];

words.forEach(item => {
    arr.push(item.toUpperCase());
});

console.log(arr);