/* Crea una función llamada ``swap`` que reciba 3 parametros. Un array y dos parametros más que sean indices del array. La función deberá 
intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array 
resultante. */

let array = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];


/* Creamos la función swap y controlamos la entrada de sus parámetros.
Si el número de parámetros es diferente a 3, si el tipo de dato es diferente a array, number, number.
Si el array es nulo o vacío. Si alguna posición es negativa o es superior al largo del array.
Una vez comprobado, guardamos el valor de las posiciones 1 y 2 en dos variables auxiliares y, con el 
método splice() asignamos el valor de la posición 2 a la posición 1 y el de la posición 1 a la posición 2.
Devolviendo el array modificado. */
function swap (array, pos1, pos2) {
    if (arguments.length !== 3) {
        return "Introduce el número de argumentos correctos (array, pos1, pos1)";
    }
    if (typeof(arguments[0]) !== 'object' || typeof(arguments[1]) !== 'number' || typeof(arguments[2]) !== 'number') {
        return "Tipo de dato erróneo (array (array), pos1 (number), pos1 (number))";
    }
    if (arguments[0] === null) {
        return "Array nulo";
    }
    if (arguments[0].length === 0) {
        return "Array vacío";
    }
    if (pos1 < 0 || pos2 < 0) {
        return "índice negativo, tiene que ser 0 o superior en función del largo del array.";
    }
    if (pos1 > arguments[0].length - 1 || pos2 > arguments[0].length - 1) {
        return "índice fuera del largo del array, tiene que ser 0 o superior en función del largo del array.";
    }
    let valuePos1 = array[pos1];
    let valuePos2 = array[pos2];

    array.splice(pos1, 1, valuePos2);
    array.splice(pos2, 1, valuePos1);
    return array;
}

console.log(swap(array, 0, 4));