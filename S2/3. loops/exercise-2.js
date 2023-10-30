/* Usa un **for...in** para imprimir por consola los datos del alienígena.. Puedes usar este objeto: */

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

/* Iteramos el objeto alien y mostramos por consola su valor */
for (let value in alien) {
    console.log(alien[value]);
}