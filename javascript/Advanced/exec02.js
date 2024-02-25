// Use o método concat para criar uma nova array que contenha todos os elementos de numeros1 seguidos por todos os elementos de numeros2.
// Em seguida, use o método filter para criar uma nova array contendo apenas os números pares da array concatenada.

let numeros1 = [1, 2, 3, 4, 5];
let numeros2 = [6, 7, 8, 9, 10];

const arr = numeros1.concat(numeros2).filter(item => {
    return item % 2 == 0;
});


console.log(arr);