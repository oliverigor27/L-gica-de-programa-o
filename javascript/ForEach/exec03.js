/**+
 * Exercício 3:
Dado o array de objetos, imprima no console uma mensagem para cada objeto com o seguinte formato: "O carro [MARCA] é [COR]."
 */

const cars = [
    { marca: "Ford", cor: "azul" },
    { marca: "BMW", cor: "preto" },
    { marca: "Fiat", cor: "vermelho" }
];

cars.forEach(items => {
    console.log(`O carro ${items.marca} é ${items.cor}`);
})