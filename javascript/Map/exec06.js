// Utilize o método map para criar uma nova array onde cada número seja uma string correspondente.

let numeros = [10, 20, 30, 40, 50];

const arr = numeros.map(item => {
    return item.toString();
});


console.log(arr);
