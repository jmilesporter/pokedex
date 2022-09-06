import {writable} from 'svelte/store';

export const pokemonList = writable([]);

const fetchpokemon = async (number) => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${number}`;
    const res = await fetch(url);
    const data = await res.json();
    const loadedpokemon = data.results.map((data, index) => {
        return {
            name: data.name,
            id: index + 1,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
        };
})

pokemonList.set(loadedpokemon) 

}

fetchpokemon(150);

// setTimeout(() => {
//     fetchpokemon(2);
// }
//     )

 