// Utilize o método map para criar uma nova array onde cada elemento seja o quadrado do número correspondente na array original.

let numeros = [1, 2, 3, 4, 5];

const arr = numeros.map((item, index, array) => {
    return item * array[index];
});


console.log(arr);