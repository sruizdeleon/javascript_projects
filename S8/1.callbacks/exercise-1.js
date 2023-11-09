/* <!-- Usa el siguiente código como base y crea 3 funciones llamadas father, sum, subtract.
La función sum sumara dos parametros a y b y los retornará.
La función substract hará lo mismo pero restando y
la función father recibirá como parámetros a, b y una función callback (sum o substract).

La función father deberá ejecutar la función que reciba como callback y añadir el numero que
retorne la función al array numersList.

Ejecuta varias veces la función father y haz finalmente un console.log de numbersList -->*/

const numbersList = [];

function sum(a, b){
    return a + b;
}

function substract(a, b){
    return a - b;
}

function father(a, b, fun){
    numbersList.push(fun(a, b));
}

father(2, 1, sum);
father(10, 2, substract);
father(4, 1, substract);
father(3, 7, sum);

console.log(numbersList);