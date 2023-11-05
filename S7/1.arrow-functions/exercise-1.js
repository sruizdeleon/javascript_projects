/* Crea una arrow function que tenga dos parametros a y b y que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre por consola la suma de los dos parametros.  */

/* - Ejecuta esta función sin pasar ningún parametro
- Ejecuta esta función pasando un solo parametro
- Ejecuta esta función pasando dos parametros */

let arrowFunction = () => 10 + 5;

console.log('Pasándo ningún parámetro', arrowFunction());

let arrowFunction2 = (a) => a + 5;

console.log('Pasándo un parámetro', arrowFunction(10));

let arrowFunction3 = (a, b) => a + b;

console.log('Pasándo dos parámetros', arrowFunction(10, 5));