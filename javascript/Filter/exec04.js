//Utilize o método filter para criar uma nova array que contenha apenas os números negativos.

let numeros = [-5, 10, -3, 8, -1, 4, 7];

const arr = numeros.filter(item => {
    return item < 0;
});

console.log(arr);