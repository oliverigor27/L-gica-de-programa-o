// Utilize o método map para criar uma nova array contendo apenas os nomes das pessoas.

let pessoas = [
    { nome: "João", idade: 25 },
    { nome: "Maria", idade: 30 },
    { nome: "Pedro", idade: 20 }
];

const arr = pessoas.map(item => {
    return item.nome;
});

console.log(arr);
