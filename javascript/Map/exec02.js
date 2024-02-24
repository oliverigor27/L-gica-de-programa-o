// Utilize o método map para criar uma nova array onde cada palavra esteja em letras maiúsculas.

let palavras = ["javascript", "é", "muito", "legal"];

const arr = palavras.map(item => {
    return item.toUpperCase();
});

console.log(arr);
