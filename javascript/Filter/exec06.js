// Utilize o método filter para criar uma nova array que contenha apenas os elementos que são strings.

let elementos = ["banana", 10, "maçã", true, "laranja", false, "abacaxi"];

const arr =  elementos.filter(item => {
    return typeof item == "string";
});

console.log(arr);