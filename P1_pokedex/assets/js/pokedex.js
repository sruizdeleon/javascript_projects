'use strict';

document.addEventListener('DOMContentLoaded', async () => {
    console.log('Aplicación Iniciada');
    let buttonFilters$$ = document.querySelector('#create-filters');
    const pokemonsWithoutMapped = await fetchPokemons();
    // console.log('Fetch', pokemonsWithoutMapped);
    const pokemonCollection = await mapPokemons(pokemonsWithoutMapped);
    // console.log('Mapped', pokemonCollection);
    printCard(pokemonCollection);
    let availableFilters = 0;
    buttonFilters$$.addEventListener('click', (event) => {
        availableFilters += event.pointerId;
        if (availableFilters % 2 !== 0) {
            filterBarActive(pokemonCollection);
        } else {
            filterBarDisable(pokemonCollection);
        }
    })
});

// GESTIÓN DE ERRORES
const errorFunction = (menssege, error) => {
    console.log(menssege, '=>', error);
}

// PETICIONES FETCH A POKEAPI POR POKEMON
const fetchPokemons = async (number = 151) => {
    try {
        const pokemonsWithoutMapped = new Array;
        for (let i = 0; i < number; i++) {
            const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${i+1}`);
            const response = await request.json();
            pokemonsWithoutMapped.push(response);
        }
        return pokemonsWithoutMapped;
    } catch (error) {
        errorFunction('Error en Fetch', error);
    }
}

// MAPEO DE POKEMONS EN ARRAY
const mapPokemons = async (pokemonsWithoutMapped) => {
    try {
        const pokemonMapped = await pokemonsWithoutMapped.map((pokemon) => ({
            id : pokemon.id,
            name : pokemon.name,
            img : pokemon.sprites.other.home.front_default,
            types : pokemon.types.map((type) => type.type.name)
        }));
        return pokemonMapped;
    } catch (error) {
        errorFunction('Error en Map', error);
    }
}

// IMPRIMIR TARJETAS DE POKEMONS EN DOM
const printCard = (pokemonsArray) => {
    try {
        const orderListPokemon$$ = document.querySelector('.list__container');
        orderListPokemon$$.innerHTML = "";
        pokemonsArray.forEach((pokemon) => {
            let cardString = `
                <article class="card">
                <div class="card__header">
                    <img class="card__img" src="${pokemon.img}" alt="${pokemon.name}">
                </div>
                <div class="card__body">
                    <div class="card__figure card__figure--${pokemon.types[0]}">
                        <img class="card__icon" src="./assets/img/types/${pokemon.types[0]}.png" alt="pokemon tipo ${pokemon.types[0]}">
                    </div>
                    <div class="card__details">
                        <div class="card__body-header">
                            <div class="card__details-container">
                                <div class="card__title-container card__title-container--${pokemon.types[0]}">
                                    <h2 class="card__title">${pokemon.name.toUpperCase()}</h2>
                                </div>
                                <div class="card__id-container card__id-container--${pokemon.types[0]}">
                                    <p class="card__id">${pokemon.id}</p>
                                </div>
                            </div>
                        </div>
                        <div class="card__body-footer">
                            <div class="card__types-container" id="types-${pokemon.id}"></div>
                        </div>
                    </div>
                </div>
            </article>
            `;
            orderListPokemon$$.insertAdjacentHTML("beforeend", cardString);
            let typesContainer$$ = document.querySelector(`#types-${pokemon.id}`);
            pokemon.types.forEach(type => {
                let typeString = `
                    <div class="card__type card__type--${type}">
                        <h3 class="card__type-text">${type.toUpperCase()}</h3>
                    </div>`;
                typesContainer$$.insertAdjacentHTML("beforeend", typeString);
            })
        })
    } catch (error) {
        errorFunction('Error en imprimiendo en DOM', error)
    }
}

// HABILITAR BARRA DE FILTROS
const filterBarActive = (pokemonCollection) => {
    try {
        // Creo bloque de filtros en HTML
        let filtersStr = `
        <form class="filters__forms" action="">
            <div class="filters__container-text">
                <label class="filters__text-label" for="filter-text">Find your pokemon</label>
                <input type="text" class="filters__text-input" name="filter-text" placeholder="Write anything">
            </div>
            <div class="filters__container-button-types">
                <div class="filters__container-button filters__container-button--bug">
                    <button class="filters__button filters__button--bug" id="button-bug">Bug</button>
                </div>
                <div class="filters__container-button filters__container-button--dragon">
                    <button class="filters__button filters__button--dragon" id="button-dragon">Dragon</button>
                </div>
                <div class="filters__container-button filters__container-button--electric">
                    <button class="filters__button filters__button--electric" id="button-electric">Electric</button>
                </div>
                <div class="filters__container-button filters__container-button--fairy">
                    <button class="filters__button filters__button--fairy" id="button-fairy">Fairy</button>
                </div>
                <div class="filters__container-button filters__container-button--fighting">
                    <button class="filters__button filters__button--fighting" id="button-fighting">Fighting</button>
                </div>
                <div class="filters__container-button filters__container-button--fire">
                    <button class="filters__button filters__button--fire" id="button-fire">Fire</button>
                </div>
                <div class="filters__container-button filters__container-button--flying">
                    <button class="filters__button filters__button--flying" id="button-flying">Flying</button>
                </div>
                <div class="filters__container-button filters__container-button--ghost">
                    <button class="filters__button filters__button--ghost" id="button-ghost">Ghost</button>
                </div>
                <div class="filters__container-button filters__container-button--grass">
                    <button class="filters__button filters__button--grass" id="button-grass">Grass</button>
                </div>
                <div class="filters__container-button filters__container-button--ground">
                    <button class="filters__button filters__button--ground" id="button-ground">Ground</button>
                </div>
                <div class="filters__container-button filters__container-button--ice">
                    <button class="filters__button filters__button--ice" id="button-ice">Ice</button>
                </div>
                <div class="filters__container-button filters__container-button--normal">
                    <button class="filters__button filters__button--normal" id="button-normal">Normal</button>
                </div>
                <div class="filters__container-button filters__container-button--poison">
                    <button class="filters__button filters__button--poison" id="button-poison">Poison</button>
                </div>
                <div class="filters__container-button filters__container-button--psychic">
                    <button class="filters__button filters__button--psychic" id="button-psychic">Psychic</button>
                </div>
                <div class="filters__container-button filters__container-button--rock">
                    <button class="filters__button filters__button--rock" id="button-rock">Rock</button>
                </div>
                <div class="filters__container-button filters__container-button--steel">
                    <button class="filters__button filters__button--steel" id="button-steel">Steel</button>
                </div>
                <div class="filters__container-button filters__container-button--water">
                    <button class="filters__button filters__button--water" id="button-water">Water</button>
                </div>
            </div>
        </form>
        `;
        // Inserto bloque
        let filterContainer$$ = document.querySelector('.filters');
        filterContainer$$.insertAdjacentHTML('beforeend', filtersStr);

        // Capturo y genero escuchador de input de texto
        let inputFilter$$ = document.querySelector('.filters__text-input');
        inputFilter$$.addEventListener('input', () => {
            filterTextPokemon(inputFilter$$.value.toLowerCase(), pokemonCollection);
        });

        //Capturo los botones y genero escuchador a cada
        let filterButtons$$ = document.querySelectorAll(".filters__button");

        // Itero lista de nodos genero el escuchador y filtro e imprimo el tipo de pokemon seleccionado.
        filterButtons$$.forEach(button => {
            button.addEventListener('click', (event) => {
                event.preventDefault();
                console.log(event.target.firstChild.data.toLowerCase());
                filterByType(event.target.firstChild.data.toLowerCase(), pokemonCollection);
            })
        })
    } catch (error) {
        errorFunction('Error en Habilitar Filtro', error);
    }
}

// DESHABILITAR BARRA DE FILTRO
const filterBarDisable = (pokemonCollection) => {
    try {
        let filterContainer$$ = document.querySelector('.filters');
        let filterForm$$ = document.querySelector('.filters__forms');
        filterContainer$$.removeChild(filterForm$$);
        printCard(pokemonCollection);
    } catch (error) {
        errorFunction('Error en Deshabilitar Filtro', error)
    }
}

// FILTRAR POKEMON POR TEXTO: NOMBRE, NÚMERO, TIPO
const filterTextPokemon = (textFilter, pokemonsCollection) => {
    try {
        // Hago un filter para buscar los pokemon por el texto introducido
        let pokemonsFiltered = pokemonsCollection.filter(pokemon => {
            // Primero reviso que el texto introducido busca por clase y lo guardo en variable
            let typeIncludes = false;
            pokemon.types.forEach(type => {
                if (type.includes(textFilter)) {
                    typeIncludes = true;
                }
            })

            // Segundo aplico la búsqueda en nombre, id y tipo
            if (pokemon.name.includes(textFilter) || pokemon.id == textFilter || typeIncludes == true) {
                return pokemon;
            }
        });

        // Me aseguro que los resultados encuentren al menos un pokemon
        if (pokemonsFiltered.length === 0) {
            // Si no hay pokemon encontrado imprimo una carta especial de no encontrado
            printCardNotFound();
        } else {
            // Si hay pokemons encontrados imprimo el array de pokemons
            printCard(pokemonsFiltered);
        }
    } catch (error) {
        errorFunction('Error en Filtro de texto', error);
    }
}

// FILTRO DE POKEMON DE TEXTO: NO ENCONTRADO
const printCardNotFound = () => {
    try  {
        console.log('hola')
        let pokemonNotFound = [{
            name : 'not found',
            img: "./assets/img/pokemon_not_found.png",
        }];
        const orderListPokemon$$ = document.querySelector('.list__container');
        orderListPokemon$$.innerHTML = "";
        let cardString = `
            <article class="card">
                <div class="card__header">
                    <img class="card__img" src="./assets/img/pokemon_not_found.png" alt="Pokemon not found">
                </div>
                <div class="card__body">
                    <div class="card__figure card__figure--normal">
                        <img class="card__icon" src="./assets/img/types/paz.png" alt="not found">
                    </div>
                    <div class="card__details">
                        <div class="card__body-header">
                            <div class="card__details-container">
                                <div class="card__title-container card__title-container--normal">
                                    <h2 class="card__title">NOT FOUND</h2>
                                </div>
                                <div class="card__id-container card__id-container--normal">
                                    <p class="card__id"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            `;
            orderListPokemon$$.insertAdjacentHTML("beforeend", cardString);
    } catch (error) {
        errorFunction('Error en Filtro No Encontrado', error);
    }
}

// FILTRAR POR TIPO
const filterByType = (textFilter, pokemonCollection) => {
    try {
        // Realizo el filtro de pokemon por su tipo
        let pokemonByType = pokemonCollection.filter(pokemon => pokemon.types[0] === textFilter || pokemon.types[1] === textFilter);
        printCard(pokemonByType);
    } catch (error) {
        errorFunction('Error en Filtro por tipo', error);
    }
}
