/* Dado el siguiente javascript usa forof y forin para hacer la media del volumen de todos los sonidos favoritos que tienen
 los usuarios. */


const users = [
    {name: 'Manolo el del bombo',
    favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
    favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
    favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
    favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
];


/* Mi método sin utilizar funciones */

let placesSounds = new Array();

/* Obtenemos del objeto users los favoriteSounds y alojamos los objetos que hay en sus valores en un Array placesSounds */
for (let user of users) {
    for (let place in user.favoritesSounds) {
        placesSounds.push(user.favoritesSounds[place]);
    }
}

let volumeItems = new Array();

/* Iteramos el array placesSounds y guardamos solo los números del atributo volume en un Array volumeItems */
for (let place of placesSounds) {
    volumeItems.push(place.volume);
}

/* Creamos una variable sumaTotal para sumar todos los volumenes*/
let sumaTotal = 0;
for (let i = 0; i < volumeItems.length; i++) {
    sumaTotal += volumeItems[i];
}

/* Creamos la última varuable promedioVolumen y dividimos la sumaTotal entre el largo del array volumeItems para sacar la media */
let promedioVolumen = sumaTotal / volumeItems.length;

console.log(`El promedio del volumen es ${promedioVolumen}`);



/* Otro método visto en clase pero con funciones (lo importante como iterar objetos por su clave): user.favoritesSound[key].volume */

/* function mediaTotalUsers(users) {
    const numeroUsuarios = users.length;
    let sumaUsuarios = 0;
    for (let user of users) {
        let mediaIndividual = 0;
        for (let key in user.favoritesSounds) {
            mediaIndividual += user.favoritesSounds[key].volume / 3;
        }
        sumaUsuarios += mediaIndividual / numeroUsuarios;
    }
    return sumaUsuarios;
}

console.log(mediaTotalUsers(users)); */