
/* Elimina el último elemento del array y muestra el primero y el último por consola. */

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

rickAndMortyCharacters.pop();

console.log("Resultado: primer elemento:", rickAndMortyCharacters[0], ", último elemento:", rickAndMortyCharacters[rickAndMortyCharacters.length - 1]);