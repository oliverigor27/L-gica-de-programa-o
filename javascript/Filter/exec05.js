// Utilize o método filter para criar uma nova array que contenha apenas as pessoas com idade maior que 18.

let pessoas = [
    { nome: "João", idade: 25 },
    { nome: "Maria", idade: 17 },
    { nome: "Pedro", idade: 30 },
    { nome: "Ana", idade: 20 }
];

const arr = pessoas.filter(item => {
    return item.idade > 18
});

console.log(arr);