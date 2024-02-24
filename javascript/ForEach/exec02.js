/**
 * Exercício 2:
Dado o array de strings, crie um novo array com o comprimento de cada string.
 * 
 */

const strings = ["hello", "world", "javascript", "coding"];

const arr = [];

strings.forEach(items => {
    arr.push(items.length);
});


console.log("O Comprimento de dada string é:\n" + arr);