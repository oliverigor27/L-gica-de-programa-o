// Utilize o método filter para criar uma nova array que contenha apenas as palavras com mais de 5 caracteres.

let palavras = ["gato", "cachorro", "elefante", "leão", "tigre"];

const arr = palavras.filter(item => {
    return item.length > 5;
});

console.log(arr);