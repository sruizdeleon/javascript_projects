/* Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40. Imprime en un console log el array. */

const placesToTravel = [
    {id: 5, name: 'Japan'},
    {id: 11, name: 'Venecia'},
    {id: 23, name: 'Murcia'},
    {id: 40, name: 'Santander'},
    {id: 44, name: 'Filipinas'},
    {id: 59, name: 'Madagascar'}
];

/* Iteramos el array placeToTravel en cada uno de sus objetos place. Si el id es igual a 11 o 40, aplicamos el método splice con inicio en place (ubicación actual en el array placesToTravel). Una vez finalizado el bucle imprimimos el array resultante. */
for (let place of placesToTravel) {
    if (place.id === 11 || place.id === 40) {
        placesToTravel.splice(place, 1);
    }
}

console.log(placesToTravel);