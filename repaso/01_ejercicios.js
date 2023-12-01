// FUNCION PARA TESTS
const test = (resultado, functTested) =>
    Array.isArray(resultado)
        ? JSON.stringify(resultado) === JSON.stringify(functTested)
            ? 'test OK'
            : 'test KO'
        : resultado === functTested
            ? 'test OK'
            : 'test KO';

///////////////////////////////////////////////////////////////////////////

/* 
1. Crea una función que devuelva el numero de vocales que hay en un string.
*/

const contarVocales = (str) => {
    let vowels = 0;
    for (let letter of str) {
        if(letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
            vowels++;
        }
    }
    return vowels;
};


// test ejercicio 1.
console.log('1A. contarVocales', test(4, contarVocales('upgrade hub')));
console.log('1B. contarVocales', test(5, contarVocales('abracadabra')));

/* 
2. Crea una función que devuelva la suma de los dos numeros positivos más pequeños de un array de numeros.

La función tiene que descartar aquellos que sean negativos o decimales
*/

const dosNumerosMenores = (numbers) => {
    let lowerFirstNumber = null;
    let lowerSecondNumber = null;
    numbers.forEach(number => {
        if (number > 0) {
            if ((number < lowerFirstNumber || lowerFirstNumber === null) && number % 1 === 0) {
                if (lowerFirstNumber !== null) {
                    lowerSecondNumber = lowerFirstNumber;
                }
                lowerFirstNumber = number;
            } else if ((number < lowerSecondNumber || lowerSecondNumber === null) && number > lowerFirstNumber && number % 1 === 0) {
                lowerSecondNumber = number;
            }
        } 
    });
    return lowerFirstNumber === null && lowerSecondNumber === null ? 'No hay números positivos y enteros en el string' : lowerFirstNumber + lowerSecondNumber;
}

// test ejercicio 2
console.log('2A. dosNumerosMenores', test(6, dosNumerosMenores([1.5, 28, 4, 2, -43])));
console.log('2B. dosNumerosMenores', test(16, dosNumerosMenores([52, 7.6, 14, 12, 4, -1])));

/* 
3. Crea dos funciones para encriptar y desencriptar un mensaje.
la función 1 convertirá los caracteres en su número ascii equivalente y los guardará en un array
usa el método "Character".charCodeAt(0);
la funciín 2 convertirá un array de números ascii en letras y devolverá un string.
usa el método String.fromCharCode(numero);
*/

const encriptar = (str) => {
    let encryptedString = new Array;
    for(let i = 0; i < str.length; i++) {
        encryptedString.push(str.charCodeAt(i));
    }
    // console.log(encryptedString);
    return encryptedString;
};
const desencriptar = (array) => {
    let desencryptedString = new Array;
    for (let i = 0; i < array.length; i++) {
        desencryptedString.push(String.fromCharCode(array[i]));
    }
    return desencryptedString.join('');
};

console.log(encriptar('Agarra la gata de la azotea'))

console.log('3A. encriptar', test([
    65, 103, 97, 114, 114, 97, 32,
    108, 97, 32, 103, 97, 116, 97,
    32, 100, 101, 32, 108, 97, 32,
    97, 122, 111, 116, 101, 97
], encriptar('Agarra la gata de la azotea')));

console.log('3B. desencriptar', test(
    'Agarra la gata de la azotea',
    desencriptar([
        65, 103, 97, 114, 114, 97, 32,
        108, 97, 32, 103, 97, 116, 97,
        32, 100, 101, 32, 108, 97, 32,
        97, 122, 111, 116, 101, 97
    ])));


/* 
4. Crea una funcion que, dados 3 numeros, la funcion debe decir si es posible 
construir un triangulo cuyos lados sea la longitud dada por los números.

PISTA: en todo triangulo la suma de los dos lados más cortos tiene que ser mayor
al lado mas largo. a + b > c;
*/


const esTriangulo = (a, b, c) => (a + b) > c ? true : false;

console.log('4A. esTriangulo', test(false, esTriangulo(1.5, 4, 6)));
console.log('4B. esTriangulo', test(true, esTriangulo(3, 7, 8)));


/* 
5. Calendario Marciano.

Un día en Marte tiene una duración de 24,6 horas terrestres.
Un año en Marte tiene una duración de 864 días marcianos.

Si consideramos que los calendarios Occidental Terrestre y Marciano tienen el punto de origen
en el 1 de enero del año 1... 


-> Crea una función que convierta una fecha terrestre a fecha marciana.

El parametro fecha debe expresarse con el siguiente formato: 'DD-MM-AAAA', tanto en el input como
en el return.

Para simplificar, asumiremos que:
- Todos los eventos tienen lugar a las 0:00 AM 
- Todos los meses tienen 30 días en la tierra y 72 en marte. 
- No hay años bisiestos

*/

const calendarioMarciano = (fecha) => {
    let splitDate = fecha.split('-');
    let earthDays = Number(splitDate[0]);
    let earthMonths = Number(splitDate[1]);
    let earthYears = Number(splitDate[2]);
    let earthHours = (((((earthYears - 1) * 12) * 30) * 24) + (((earthMonths - 1) * 30) * 24) + ((earthDays) * 24));
    let martianDays = Math.trunc(earthHours / 24.6);
    let martianYears = Math.trunc(martianDays / 864);
    let martianMonths = Math.trunc((((martianDays / 864) - martianYears) * 864) / 72);
    let martianDay = Math.trunc((((((martianDays / 864) - martianYears) * 864) / 72) - martianMonths) * 72);
    martianDay += 1;
    martianMonths += 1;
    martianYears += 1;
    martianDay < 9 ? martianDay = `0${martianDay}` : martianDay;
    martianMonths < 9 ? martianMonths = `0${martianMonths}` : martianMonths;
    return `${martianDay}-${martianMonths}-${martianYears}`;
}

console.log('5A. calendarioMarciano', test('57-05-194', calendarioMarciano('4-10-476')));
console.log('5c. calendarioMarciano', test('52-03-801', calendarioMarciano('20-07-1969')));
console.log('5B. calendarioMarciano', test('53-04-823', calendarioMarciano('18-11-2023')));

