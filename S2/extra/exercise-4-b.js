/* Usando la función anterior beneficiate de poder conocer el indice del array para crear una función llamada 
`removeItem` que pasandole un array y un texto como parametros (los mismos parametros que en el anterior ejercicio) 
llame a la función anteriormente creada ``findArrayIndex`` y obten el indice para posteriormente usar la función de 
javascript ``.splice()`` para eliminar el elemento del array. Finalmente retorna el array.

De nuevo haz varios ejemplos para practicar y comprueba que funcionan correctamente. */

let insect = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote', 'Mosquito', 'Salamandra', 'Ajolote', 'Mosquito', 'Salamandra', 'Ajolote'];
let cars = ['BMW', 'Peugeot', 'Mercedes', 'Renault', 'BMW', 'BMW', 'BMW'];

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


/* Creamos la función removeItem y controlamos la entrada de sus parámetros.
Si es diferente a 2 parámetros. Si el tipo de dato es diferente a array o string.
Una vez comprobado, hacemos un bucle while mientras el índice sea -1, ya que de no serlo
significará que aún aparece drentro del array, y borramos todas las apariciones devolviendo
el array limpio. */
function removeItem (array, text) {
    if (arguments > 2) {
        return "Has introducido demasiados argumentos (array, text)";
    } else if (arguments < 2) {
        return "Has introducido pocos argumentos (array, text)";
    } else {
        if (typeof(arguments[0]) !== 'object' || typeof(arguments[1]) !== 'string') {
            return "Tipo de datos erróneos (array, text)";
        }
    }
    while (findArrayIndex(array, text) !== -1) {
        array.splice(findArrayIndex(array, text), 1);
    }
    return array;
}

console.log(removeItem(insect, 'Mosquito'));
console.log(removeItem(cars, 'BMW'));
