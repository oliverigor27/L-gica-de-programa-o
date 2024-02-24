/**
 * Exercício 5:
Dado o array de objetos, crie um novo array apenas com as idades das pessoas.
 */

const people = [
    { nome: "João", idade: 25 },
    { nome: "Maria", idade: 30 },
    { nome: "Pedro", idade: 20 }
];

const arr = [];
people.forEach(item => {

    arr.push(item.idade);

});

console.log(arr);