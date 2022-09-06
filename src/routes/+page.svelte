<script>
	import { pokemonList } from '../stores/pokemart.js';
	import PokemonCard from '../components/PokemonCard.svelte';

	let searchTerms = '';
	let filteredpokemon = [];

	$: {
		if (searchTerms) {
			filteredpokemon = $pokemonList.filter((pokemon) =>
				pokemon.name.toLowerCase().includes(searchTerms.toLowerCase())
			);
		} else {
			filteredpokemon = [...$pokemonList];
		}
	}
</script>

<svelte:head>
	<title>Pokédex</title>
</svelte:head>
<h1 class="text-4xl text-center my-8 uppercase">Pokédex</h1>

<input
	class="w-full rounded-md text-lg p-4 border-2 border-gray-200"
	type="text"
	placeholder="search pokemon"
	bind:value={searchTerms}
/>

<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
	{#each filteredpokemon as pokemon}
		<PokemonCard {pokemon} />
	{/each}
</div>
