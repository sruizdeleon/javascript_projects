/* Convierte la siguiente función con un fetch utilizando async-await. Recuerda que para usar .fetch() tendrás que probar
el ejercicio en el navegador; */

function getCharacters () {
    fetch('https://rickandmortyapi.com/api/character').then(res => res.json()).then(characters => console.log(characters));
}


const getCharacters2 = async () => {
    try {
        const request = await fetch('https://rickandmortyapi.com/api/character');
        const data = await request.json();
        console.log(data);
    } catch {
        console.error(error);
    }
}


/* getCharacters(); */
getCharacters2();

