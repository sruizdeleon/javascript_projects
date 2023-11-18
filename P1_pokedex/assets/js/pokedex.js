'use strict';

const orderListPokemon$$ = document.querySelector('#pokedex');

const addPokemons = async () => {
    const pokemonsArray = new Array;
    const pokemons = await loopPokemon151(pokemonsArray);
    return pokemons;
}

const loopPokemon151 = async (pokemonsArray) => {
    for (let i = 1; i < 152; i++) {
        pokemonsArray.push(await getPokemons(i));
    }
    return pokemonsArray;
}

const getPokemons = async (index) => {
    const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
    const response = await request.json();
    return response;
}

const mapPokemon = async (array) => {
    const pokemonMapped = await array.map((pokemon) => ({
        name : pokemon.name,
        id : pokemon.id,
        name : pokemon.name,
        img : pokemon.sprites.other.dream_world.front_default,
        types : pokemon.types.map((type) => type.type.name)
        }));
    return pokemonMapped;
}

const printCard = (pokemons) => {
    orderListPokemon$$.innerHTML = "";
    pokemons.forEach(async pokemon => {
        let typesStr = new Array;
        let typeTag = await pokemon.types.forEach(type => {
            typesStr.push(`<p class"card-tag-${type}">${type}</p>`)
        });
        console.log(typesStr);
        let str =
        `<article class="card card-${pokemon.types[0]}">
            <h2 class="card-title">${pokemon.name}</h2>
            <p class="card-subtitle">${pokemon.id}</p>
            <img class="card-image" src="${pokemon.img}" alt="${pokemon.name}">
            <div class="card-footer-types">${typesStr.join('')}</div>
        </article>`;
        orderListPokemon$$.insertAdjacentHTML('beforeend', str);
    });
    console.log(pokemons);
}

const init = async () => {
    const uncutPokemon = await addPokemons();
    const pokemons = await mapPokemon(uncutPokemon);
    // console.log('Pokemons', pokemons);
    const printPokemons = printCard(pokemons);
}

init();
