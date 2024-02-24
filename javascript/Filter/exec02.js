// Utilize o método filter para criar uma nova array que contenha apenas os números maiores que 5.

let numeros = [3, 8, 2, 10, 5, 7, 1];


const arr = numeros.filter(item => {
    return item > 5;
});

console.log(arr);