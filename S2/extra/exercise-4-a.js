/* Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y devuelve la 
posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

Haz varios ejemplos y compruebalos.

Sugerencia de función: */

let insect = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];
let cars = ['BMW', 'Peugeot', 'Mercedes', 'Renault'];
let compra = ['Pan', 'Huevos', 'Azucar', 'Cafe'];

/* Creamos la función findArrayIndex, la cual primero controlamos la entrada de parámetros.
Si el número de argumentos es diferente a 2. Si el tipo es diferente a array o string respectivamente.
Si la entrada de parámetros es correcta, devolvemos el índice. */
function findArrayIndex(array, text) {
    if (arguments > 2) {
        return "Has introducido demasiados argumentos (array, text)";
    } else if (arguments < 2) {
        return "Has introducido pocos argumentos (array, text)";
    } else {
        if (typeof(arguments[0]) !== 'object' || typeof(arguments[1]) !== 'string') {
            return "Tipo de datos erróneos (array, text)";
        }
    }
    return array.indexOf(text);
}


console.log("En el Array insect, Salamandra está en la posición:", findArrayIndex(insect, 'Salamandra'));
console.log("En el Array cars, BMW está en la posición:", findArrayIndex(cars, 'BMW'));
console.log("En el Array compra, Cafe está en la posición:", findArrayIndex(compra, 'Cafe'));