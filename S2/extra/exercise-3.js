/* Dado el siguiente javascript usa forof y forin para saber cuantas veces ha sido cada sonido agregado por los usuarios a
favorito. Para ello recorre la lista de usuarios y usa forin para recoger el nombre de los sonidos que el usuario tenga como favoritos.
Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada vez que ese sonido se repita como favorito en cada usuario.

Este ejercicio es un poco complicado con los conocimientos actuales pero...a la vez un buen reto y oportunidad para
comprender que hay muchas formas de hacer las cosas en javascript. */

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

let sounds = new Array();

/* Obtenemos del objeto users los favoriteSounds y alojamos los objetos que hay en sus valores en un Array placesSounds */
for (let user of users) {
    for (let place in user.favoritesSounds) {
        sounds.push(place);
    }
}

let unicSounds = new Array();

/* Obtenemos un array unicSounds, donde alojamos únicamente los sonidos sin repetirse, quitando los duplicados */
sounds.forEach(sound =>{
    if (unicSounds.indexOf(sound) === -1) {
        unicSounds.push(sound);
    }
})

let countSounds = new Array();

/* Contamos en el array countSounds el número de veces que sale cada sonido del array unicSounds, en el array sounds */
unicSounds.forEach(item =>{
    let suma = 0;
    sounds.forEach(sound =>{
        if (item === sound) {
            suma++;
        }
    })
    countSounds.push(suma);
})

let soundsTimes = new Map();

/* Creamos un mapa soundsTimes donde alojamos cada sonido (unicSounds) como clave y el número de veces que aparece (countSounds) en el valor. */
for (i = 0; i < unicSounds.length; i++) {
    soundsTimes.set(unicSounds[i], countSounds[i]);
}

console.log(soundsTimes);
