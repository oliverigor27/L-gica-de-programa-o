/**
 * Utilize o método map para criar uma nova array onde cada 
 * temperatura seja convertida para Fahrenheit utilizando a fórmula: F = C * 9/5 + 32.
 */

let temperaturasCelsius = [0, 15, 30, 45, 60];

const arr = temperaturasCelsius.map(item => {
    let F = (item * 9/5) + 32;

    return F;
});

for(let i = 0; i < arr.length; i++)
{
    console.log(`A temperatura celsius  de ${temperaturasCelsius[i]} em Fahrenheit é: ${arr[i]}`);
}