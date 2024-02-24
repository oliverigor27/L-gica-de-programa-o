// Utilize o método filter para criar uma nova array que contenha apenas os números pares.

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const arr = numeros.filter(item => {
    return item%2 == 0;
});

console.log(arr);