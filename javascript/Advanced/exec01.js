/**
 *  - Use o método filter para criar uma nova array contendo apenas as pessoas com idade superior a 25 anos.
    - Em seguida, use o método map para criar uma nova array com os nomes das pessoas filtradas.
 */

let pessoas = [
    { nome: "João", idade: 25 },
    { nome: "Maria", idade: 30 },
    { nome: "Pedro", idade: 20 },
    { nome: "Ana", idade: 35 }
];

const arr = pessoas
    .filter(item => {
        return item.idade > 25;
    })
    .map(item => {
        return item;
    })

console.log(arr);