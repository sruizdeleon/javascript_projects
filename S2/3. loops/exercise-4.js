/* Usa un bucle **for...** para recorrer todos los juguetes y elimina los que incluyan la palabra 'gato'. Recuerda que puedes usar
la función ***.includes()*** para comprobarlo.Puedes usar este array: */

const toys = [
    { id: 5, name: 'Buzz MyYear' },
    { id: 11, name: 'Action Woman' },
    { id: 23, name: 'Barbie Man' },
    { id: 40, name: 'El gato con Guantes' },
    { id: 40, name: 'El gato felix' }
];


/* Opción 1: sencilla */

/* fot (let i = 0; i < toys.length; i++) {
    if (toys[i].includes('gato')) {
        toys.splice(i, 1);
        i--;
    }
} */

/* Opción 2: la que hice en un inicio */

/* Creamos un array toDelete para guardar las posiciones del array toys que contienen la palabra gato. Iteramos un bucle for of
comprobamos que la etiqueta name incliya gato, si lo incliye, guardamos con push el valor de posición */
let toDelete = new Array;
let position = 0;
for (let toy of toys) {
    if (toy.name.includes('gato') == true) {
        toDelete.push(position);
    }
    position++;
}


/* Calculamos el largo del array toDelete para iterar de max a min. Iteramos con un bucle for desde i (largo del array toys)
hacia abajo. Si la posición de i (array toys) coincide con el contenido del array toDelete, borramos con splice, esa posición. */

let deleteLenght = toDelete.length - 1;

for (let i = (toys.length - 1); i >= 0; i--) {
    if (i == toDelete[deleteLenght]) {
        toys.splice(toDelete[deleteLenght], 1);
        deleteLenght--;
    }
}
