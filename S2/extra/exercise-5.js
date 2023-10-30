
/* Crea una función llamada ``rollDice()`` que reciba como parametro el numero de caras que queramos que tenga el dado 
que deberá silumar el codigo dentro de la función. Como hemos dicho, que la función use el parametro para simular 
una tirada de dado y retornar el resultado. Si no se te ocurre como hacer un numero aleatorio no te preocupes! busca 
información sobre la función de javascript ``Math.random()``
 */


/* Creamos la función rollDice y controlamos sus parámetros. Si el número de parámetros es diferente de uno.
Si el parámetro es diferente a un número. Si es un número negativo, un 0 o 1. Una vez comprobado, usamos el método
Marh.random para generar un número aleatorio entre 0 y 1. Lo multiplicamos por la variable caras, le
sumamos 1 y obtenemos el valor entero con el método Math.trunc. */
function rollDice(caras) {
    if (arguments.length !== 1) {
        return "Número de argumentos incorrecto, introduce sólo un número."
    }
    if (typeof(arguments[0]) !== 'number') {
        return "Dato introducido diferente a number."
    }
    if (arguments[0] < 1) {
        return "El número tiene que ser positivo y mayor que 1."
    }
    if (arguments[0] === 1) {
        return `Un dado de 1 cara siempre dará 1, pero si lo quieres va el resultado: ${Math.trunc((caras * Math.random()) + 1)}`;
    }
    return `Resultado: ${Math.trunc((caras * Math.random()) + 1)}`;
}

console.log(rollDice(500));